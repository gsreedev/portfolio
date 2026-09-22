# G Sreedev — Personal Developer Portfolio

Personal software-engineering portfolio built as a production-oriented application.
The visual design preserves the original Swiss/International template: strict grid,
Inter Tight typography, hairline rules, a single red signal accent (`#e30613`),
numbered sections, and snappy transitions.

## Stack

| Layer      | Technology                          |
| ---------- | ----------------------------------- |
| Frontend   | React 19 + Vite                     |
| Backend    | FastAPI (Python 3.12)               |
| Database   | PostgreSQL 16                       |
| Containers | Docker + Docker Compose             |
| Proxy      | nginx (serves SPA, routes `/api/`)  |

## Project structure

```
frontend/                  React application
  public/assets/           Drop your photo at profile.jpg
  src/components/          Reusable UI (Header, Footer, Reveal, ContactForm…)
  src/sections/            Page sections (Hero → Contact)
  src/data/content.js      All portfolio content in one place
  src/config/site.js       Site-wide config & contact links
  src/services/api.js      API service layer
  src/styles/              Design system (base / app / sections)
backend/                   FastAPI application
  app/main.py              App factory, CORS, health check
  app/routes/contact.py    POST /api/contact
  app/schemas.py           Pydantic validation
  app/models.py            SQLAlchemy models
  app/database.py          Engine / session / init
  app/services/            Email notification (optional SMTP)
  app/config.py            Settings from environment variables
docker-compose.yml         One-command full stack
```

## Quick start (Docker)

```bash
# 1. Configure environment
cp backend/.env.example backend/.env   # edit passwords / SMTP if needed

# 2. Start everything (db + backend + frontend)
docker compose up --build

# 3. Open
# Frontend → http://localhost:3000
# API      → http://localhost:8000/api/health
# Docs     → http://localhost:8000/docs
```

## Local development (without Docker)

**Backend**

```bash
cd backend
python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env          # set POSTGRES_HOST=localhost
uvicorn app.main:app --reload --port 8000
```

**Frontend**

```bash
cd frontend
npm install
cp .env.example .env          # VITE_API_BASE_URL empty → uses Vite proxy
npm run dev                   # http://localhost:5173 (proxies /api → :8000)
```

A running PostgreSQL instance is required for the backend (use `docker compose up db`).

## API

| Method | Path           | Body                                     | Response        |
| ------ | -------------- | ---------------------------------------- | --------------- |
| GET    | `/api/health`  | —                                        | service + DB status |
| POST   | `/api/contact` | `{ name, email, message }`               | `201 { status, id }` |

Validation: `name` 2–100 chars, valid `email`, `message` 10–2000 chars.
Messages are stored in the `contact_messages` PostgreSQL table. If SMTP is
configured, an email notification is also sent (best-effort, never blocks).

## Configuration & secrets

All secrets come from environment variables — nothing is hard-coded:

- `POSTGRES_USER` / `POSTGRES_PASSWORD` / `POSTGRES_DB` / `POSTGRES_HOST` / `POSTGRES_PORT`
- `CORS_ORIGINS` (comma-separated)
- `SMTP_HOST` / `SMTP_PORT` / `SMTP_USER` / `SMTP_PASSWORD` / `SMTP_FROM` / `SMTP_TO` / `SMTP_USE_TLS`
- Frontend: `VITE_API_BASE_URL` (empty in production — nginx proxies `/api`)

Never commit `.env` files.

## Personalize before deploying

1. **Photo** — place your portrait at `frontend/public/assets/profile.jpg` (portrait ~4:5, ≥800×1000). A designed placeholder shows until then.
2. **Contact links** — edit `frontend/src/config/site.js` (email, phone, GitHub, LinkedIn placeholders).
3. **Content** — edit `frontend/src/data/content.js` for skills, projects, experience, education, certifications, publication.
4. **Publication link** — set `publication.link` to the real DOI/publisher URL when available (left `null` on purpose; nothing is invented).

## UX notes

- Fully responsive (desktop / tablet / mobile), semantic HTML, skip-link, keyboard-friendly nav.
- Dark/light mode toggle — persisted in `localStorage`, defaults to the system preference, no flash of wrong colors on load; every color is driven by CSS variables.
- Subtle reveal animations with `prefers-reduced-motion` support — no animation hides content from recruiters.
- SEO metadata and Open Graph tags in `frontend/index.html`.
- Contact form: client-side validation, loading/error/success states, requests to FastAPI only (no secrets in the frontend).
