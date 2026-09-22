import site from "../config/site.js";

const TIMEOUT_MS = 15000;

class ApiError extends Error {
  constructor(message, status, details) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.details = details ?? null;
  }
}

async function request(path, { method = "GET", body = null, signal } = {}) {
  const url = `${site.api.baseUrl}${path}`;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);

  const externalAbort = () => controller.abort();
  if (signal) {
    if (signal.aborted) controller.abort();
    else signal.addEventListener("abort", externalAbort, { once: true });
  }

  try {
    const response = await fetch(url, {
      method,
      headers: body ? { "Content-Type": "application/json" } : undefined,
      body: body ? JSON.stringify(body) : undefined,
      signal: controller.signal,
    });

    const isJson = response.headers
      .get("content-type")
      ?.includes("application/json");
    const data = isJson ? await response.json() : null;

    if (!response.ok) {
      const message =
        data?.detail?.[0]?.msg ||
        data?.detail ||
        data?.message ||
        `Request failed with status ${response.status}`;
      throw new ApiError(
        typeof message === "string" ? message : "Request failed",
        response.status,
        data?.detail ?? null
      );
    }

    return data;
  } catch (error) {
    if (error instanceof ApiError) throw error;
    if (error.name === "AbortError") {
      throw new ApiError("Request timed out. Please try again.", 0);
    }
    throw new ApiError("Network error. Please try again later.", 0);
  } finally {
    clearTimeout(timeout);
    if (signal) signal.removeEventListener("abort", externalAbort);
  }
}

export const api = {
  health: () => request("/api/health"),
  sendContact: (payload, options) =>
    request("/api/contact", {
      method: "POST",
      body: payload,
      ...options,
    }),
};

export { ApiError };
