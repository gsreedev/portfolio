import { useState } from "react";
import { api, ApiError } from "../services/api.js";

const INITIAL = { name: "", email: "", message: "" };
const LIMITS = { name: 100, email: 254, message: 2000 };

function validate(values) {
  const errors = {};
  const name = values.name.trim();
  const email = values.email.trim();
  const message = values.message.trim();

  if (name.length < 2) errors.name = "Enter your name (min. 2 characters).";
  else if (name.length > LIMITS.name) errors.name = "Name is too long.";

  if (!email) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.email = "Enter a valid email address.";
  else if (email.length > LIMITS.email) errors.email = "Email is too long.";

  if (message.length < 10) errors.message = "Message must be at least 10 characters.";
  else if (message.length > LIMITS.message) errors.message = "Message is too long.";

  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [serverError, setServerError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (status === "error") {
      setStatus("idle");
      setServerError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = validate(values);
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    setStatus("loading");
    setServerError("");

    try {
      await api.sendContact({
        name: values.name.trim(),
        email: values.email.trim(),
        message: values.message.trim(),
      });
      setStatus("success");
      setValues(INITIAL);
    } catch (error) {
      setStatus("error");
      setServerError(
        error instanceof ApiError
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  };

  if (status === "success") {
    return (
      <div className="form-success" role="status">
        <span className="label">Received</span>
        <p>Message sent. I will get back to you within one business day.</p>
        <button
          type="button"
          className="btn btn-ghost btn-sm"
          onClick={() => setStatus("idle")}
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-field">
        <label htmlFor="contact-name">Name</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={handleChange}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          maxLength={LIMITS.name}
          required
        />
        {errors.name ? (
          <span className="field-error" id="contact-name-error" role="alert">
            {errors.name}
          </span>
        ) : null}
      </div>

      <div className="form-field">
        <label htmlFor="contact-email">Email</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={handleChange}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          maxLength={LIMITS.email}
          required
        />
        {errors.email ? (
          <span className="field-error" id="contact-email-error" role="alert">
            {errors.email}
          </span>
        ) : null}
      </div>

      <div className="form-field form-field-full">
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={
            errors.message ? "contact-message-error" : undefined
          }
          maxLength={LIMITS.message}
          required
        />
        {errors.message ? (
          <span className="field-error" id="contact-message-error" role="alert">
            {errors.message}
          </span>
        ) : null}
      </div>

      {status === "error" ? (
        <p className="form-server-error" role="alert">
          {serverError}
        </p>
      ) : null}

      <div className="form-actions form-field-full">
        <button
          type="submit"
          className="btn btn-primary"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending…" : "Send Message"}
        </button>
        {/* <span className="form-note">
          Delivered securely to the backend — no page reload.
        </span> */}
      </div>
    </form>
  );
}
