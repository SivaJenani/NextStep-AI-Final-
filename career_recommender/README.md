# AI-Based Smart Career Guidance and Job Recommendation Web Application

Full-stack career assistant built with FastAPI, React (Vite), Tailwind CSS, SQLAlchemy, SQLite/PostgreSQL, and Alembic.

## Features

- JWT authentication with secure password hashing
- Profile creation for skills, domain, location, experience level, and job vs internship mode
- Real-time job and internship recommendations using RapidAPI JSearch with a graceful sample-data fallback
- ML ranking using TF-IDF and cosine similarity
- AI score, skill match percentage, matched skills, missing skills, and job readiness score
- Resume analyzer with PDF upload and automatic skill extraction
- Career roadmap generator with 30/60/90-day stages
- Personalized project suggestions from detected skill gaps
- Company recommendations and trending skill insights
- Email alert subscription support with scheduled notification dispatch
- Skill gap dashboard with gap bar chart insights
- OpenAI-powered career mentor chatbot
- Interview preparation question generator
- Job bookmarking and application tracking
- Fraud job detection with rule-based warnings

## Project Structure

```text
career_recommender/
├── backend/
│   ├── main.py
│   ├── database.py
│   ├── models.py
│   ├── schemas.py
│   ├── auth.py
│   ├── job_api.py
│   ├── ml_ranker.py
│   ├── resume_parser.py
│   ├── roadmap_generator.py
│   ├── fraud_detector.py
│   ├── notification_service.py
│   ├── interview_module.py
│   ├── alembic.ini
│   ├── alembic/
│   └── requirements.txt
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── context/
│   │   └── pages/
│   ├── tailwind.config.js
│   └── package.json
└── README.md
```

## Backend Setup

```bash
cd career_recommender/backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
copy .env.example .env
alembic upgrade head
uvicorn main:app --reload
```

Backend runs at `http://127.0.0.1:8000`.

## Frontend Setup

```bash
cd career_recommender/frontend
npm install
copy .env.example .env
npm run dev
```

Frontend runs at `http://127.0.0.1:5173`.

## API Endpoints

- `POST /auth/signup`
- `POST /auth/login`
- `POST /profile/create`
- `GET /profile/view`
- `POST /resume/upload`
- `GET /recommend/jobs`
- `GET /recommend/internships`
- `GET /dashboard/skills`
- `GET /roadmap/generate`
- `POST /bookmark/save`
- `GET /bookmark/list`
- `POST /tracker/update-status`
- `GET /notifications/subscribe`
- `GET /interview/questions`
- `POST /chatbot/ask`
- `GET /chatbot/ask`
- `GET /employer/integration`
- `PUT /employer/integration`
- `GET /employer/integration/providers`
- `GET /employer/integration/sample-webhook`
- `POST /employer/integration/rotate-webhook-secret`
- `POST /employer/webhook/{employer_id}`

## ATS Webhook Integration

This project supports incoming ATS webhook sync events from employer applicant tracking systems.

- Employers can configure `ats_system` to identify providers like Greenhouse, Lever, Workday, SmartRecruiters, BambooHR, iCIMS, and JazzHR.
- Use `GET /employer/integration` to retrieve the current integration status, webhook endpoint, and secret.
- Use `PUT /employer/integration` to enable `webhook_enabled`, set the ATS system name, and save `webhook_url` or careers page settings.
- The backend accepts webhook events at `POST /employer/webhook/{employer_id}`.
- Supported webhook event types: `job.created`, `job.updated`, and `job.deleted`.
- Webhook verification can use either `x-webhook-signature` (HMAC SHA256) or `x-webhook-secret`.
- Use `GET /employer/integration/sample-webhook` to get a sample payload and connection details.

## ML Recommendation Logic

- Profile skills and job descriptions are vectorized with TF-IDF.
- Cosine similarity produces the AI score.
- Skill match percentage comes from overlap between extracted job skills and user skills.
- Job readiness score blends skill match, AI similarity, domain alignment, and experience alignment.

## Real-Time Jobs Configuration

This project uses RapidAPI JSearch for live jobs and internships.

Set these backend environment variables:

- `RAPIDAPI_KEY`
- `RAPIDAPI_HOST`
- `RAPIDAPI_JOB_SEARCH_URL`
- `RAPIDAPI_MARKET`
- `OPENAI_API_KEY`
- `OPENAI_CHAT_MODEL` (optional, defaults to `gpt-5.4-mini`)

If these values are missing or the API request fails, the app falls back to sample jobs so the rest of the platform still works in local development.

## Resume Parsing

- `pdfplumber` is used first for PDF text extraction.
- `PyMuPDF` is used as a fallback if the extracted text is empty.
- Skills are detected by keyword extraction from the resume text.

## Notification System

- Subscribe through `GET /notifications/subscribe?email=you@example.com&frequency=daily`
- SMTP settings are read from environment variables
- APScheduler runs a periodic scan and sends matching job alerts for subscribed users

## SQLite to PostgreSQL Migration

Local development defaults to SQLite:

```env
DATABASE_URL=sqlite:///./career_recommender.db
```

For production, switch to PostgreSQL:

```env
DATABASE_URL=postgresql+psycopg2://username:password@host:5432/career_recommender
```

Then run:

```bash
alembic upgrade head
```

## Deployment

### Backend

- Render
- Railway
- AWS Elastic Beanstalk / ECS / EC2

Set environment variables for:

- `DATABASE_URL`
- `JWT_SECRET_KEY`
- `RAPIDAPI_KEY`
- `RAPIDAPI_HOST`
- SMTP credentials

Example start command:

```bash
uvicorn main:app --host 0.0.0.0 --port $PORT
```

### Frontend

- Vercel
- Netlify

Set:

```env
VITE_API_BASE_URL=https://your-backend-domain.com
```

Build command:

```bash
npm run build
```

Output directory:

```bash
dist
```

## Notes

- The chatbot now uses OpenAI and is grounded with the logged-in user's profile, recommendations, roadmap, resume audit, and saved jobs.
- If `OPENAI_API_KEY` is missing, the chat endpoint returns a setup error until the backend environment is configured.
- Fraud detection is implemented with practical rules and can be replaced with a trained classifier later.
