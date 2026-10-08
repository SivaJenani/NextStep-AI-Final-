from __future__ import annotations

import re
from typing import Any

from constants.course_ids import (
    BACKEND_API_CERT,
    CLOUD_PRACTITIONER,
    DATA_ANALYTICS_CERT,
    DEPLOYMENT_WORKFLOW,
    DOCKER_FOUNDATIONS,
    EXCEL_FOUNDATIONS,
    FIGMA_FOUNDATIONS,
    FINANCIAL_MODELING_FOUNDATIONS,
    GIT_FOUNDATIONS,
    GOOGLE_ANALYTICS_CERT,
    GOOGLE_ANALYTICS_PREP,
    HUBSPOT_CRM_CERT,
    JAVASCRIPT_FOUNDATIONS,
    LINUX_FOUNDATIONS,
    POSTMAN_API_FOUNDATIONS,
    POWER_BI_CERT,
    PYTHON_FOUNDATIONS,
    REACT_FOUNDATIONS,
    RELIABILITY_ENGINEERING,
    RESPONSIVE_WEB_CERT,
    SEO_FOUNDATIONS,
    SERVICE_ARCHITECTURE,
    SQL_FOUNDATIONS,
    TESTING_GUIDED,
)

COURSE_TITLE_BY_ID = {
    BACKEND_API_CERT: "freeCodeCamp Back End Development and APIs Certification",
    TESTING_GUIDED: "Testing Guided Practice",
    DEPLOYMENT_WORKFLOW: "Deployment Workflow Practice",
    SERVICE_ARCHITECTURE: "Service Architecture Guide",
    RELIABILITY_ENGINEERING: "Reliability Engineering Guide",
    PYTHON_FOUNDATIONS: "Python for Everybody",
    SQL_FOUNDATIONS: "Databases and SQL for Data Science",
    REACT_FOUNDATIONS: "React - The Complete Guide",
    JAVASCRIPT_FOUNDATIONS: "Modern JavaScript Bootcamp",
    RESPONSIVE_WEB_CERT: "Responsive Web Design",
    DOCKER_FOUNDATIONS: "Docker or Cloud Fundamentals",
    CLOUD_PRACTITIONER: "AWS Cloud Practitioner Essentials",
    POSTMAN_API_FOUNDATIONS: "Postman API Fundamentals",
    POWER_BI_CERT: "Microsoft Power BI Data Analyst",
    DATA_ANALYTICS_CERT: "Google Data Analytics Certificate",
    SEO_FOUNDATIONS: "Google SEO Fundamentals",
    EXCEL_FOUNDATIONS: "Excel Skills for Business",
    FINANCIAL_MODELING_FOUNDATIONS: "Financial Modeling for Beginners",
    GIT_FOUNDATIONS: "Version Control with Git",
    LINUX_FOUNDATIONS: "Linux for Beginners",
    FIGMA_FOUNDATIONS: "UI/UX Design with Figma",
    HUBSPOT_CRM_CERT: "HubSpot CRM Certification",
    GOOGLE_ANALYTICS_CERT: "Google Analytics Certification",
    GOOGLE_ANALYTICS_PREP: "Google Analytics Certification Prep",
}

COURSE_ID_BY_SKILL = {
    "python": PYTHON_FOUNDATIONS,
    "sql": SQL_FOUNDATIONS,
    "react": REACT_FOUNDATIONS,
    "fastapi": BACKEND_API_CERT,
    "rest api": BACKEND_API_CERT,
    "api basics": BACKEND_API_CERT,
    "javascript": JAVASCRIPT_FOUNDATIONS,
    "html": RESPONSIVE_WEB_CERT,
    "css": RESPONSIVE_WEB_CERT,
    "seo": SEO_FOUNDATIONS,
    "financial modeling": FINANCIAL_MODELING_FOUNDATIONS,
    "excel": EXCEL_FOUNDATIONS,
    "power bi": POWER_BI_CERT,
    "hubspot": HUBSPOT_CRM_CERT,
    "linux": LINUX_FOUNDATIONS,
    "api testing": POSTMAN_API_FOUNDATIONS,
    "aws": CLOUD_PRACTITIONER,
    "git": GIT_FOUNDATIONS,
    "figma": FIGMA_FOUNDATIONS,
    "google analytics": GOOGLE_ANALYTICS_PREP,
}

LEGACY_TITLE_TO_COURSE_ID = {
    "rest api guided course": BACKEND_API_CERT,
    "fastapi or backend api path": BACKEND_API_CERT,
    "back end development and apis certification (freecodecamp)": BACKEND_API_CERT,
    "fastapi beyond crud": BACKEND_API_CERT,
    "api design patterns": BACKEND_API_CERT,
    "api troubleshooting practice": BACKEND_API_CERT,
    "postman api fundamentals": POSTMAN_API_FOUNDATIONS,
    "postman collections walkthrough": POSTMAN_API_FOUNDATIONS,
    "testing and reliability guides": RELIABILITY_ENGINEERING,
    "frontend testing essentials": TESTING_GUIDED,
    "deployment workflow practice": DEPLOYMENT_WORKFLOW,
    "production app deployment": DEPLOYMENT_WORKFLOW,
    "cloud or docker fundamentals": DOCKER_FOUNDATIONS,
    "cloud practitioner basics": CLOUD_PRACTITIONER,
    "backend case studies": SERVICE_ARCHITECTURE,
    "system design interview practice": SERVICE_ARCHITECTURE,
    "service architecture": SERVICE_ARCHITECTURE,
    "python developer fundamentals": PYTHON_FOUNDATIONS,
    "python application fundamentals": PYTHON_FOUNDATIONS,
    "sql query practice": SQL_FOUNDATIONS,
    "database schema design basics": SQL_FOUNDATIONS,
    "react developer path": REACT_FOUNDATIONS,
    "modern react workflow": REACT_FOUNDATIONS,
    "responsive web design": RESPONSIVE_WEB_CERT,
    "responsive web design fundamentals": RESPONSIVE_WEB_CERT,
    "docker or cloud fundamentals": DOCKER_FOUNDATIONS,
    "excel skills for business": EXCEL_FOUNDATIONS,
    "google data analytics certificate": DATA_ANALYTICS_CERT,
    "microsoft power bi data analyst": POWER_BI_CERT,
    "google seo fundamentals": SEO_FOUNDATIONS,
    "financial modeling for beginners": FINANCIAL_MODELING_FOUNDATIONS,
    "hubspot crm certification": HUBSPOT_CRM_CERT,
    "linux and command-line basics": LINUX_FOUNDATIONS,
    "git workflow practice": GIT_FOUNDATIONS,
    "ui/ux design with figma": FIGMA_FOUNDATIONS,
    "google analytics certification prep": GOOGLE_ANALYTICS_PREP,
    "google analytics certification": GOOGLE_ANALYTICS_CERT,
}


FAMILY_BLUEPRINTS: dict[str, dict[str, Any]] = {
    "product_support": {
        "starter_skills": ["communication", "ticket handling", "crm basics", "sql", "api basics"],
        "total_time": "8-11 months",
        "route_options": [
            {
                "title": "Fastest support route",
                "duration": "6-8 months",
                "description": "Start with customer support operations, then layer CRM ownership and troubleshooting depth quickly.",
                "recommended": False,
            },
            {
                "title": "Balanced technical route",
                "duration": "8-11 months",
                "description": "Blend customer-facing experience with SQL, logs, Linux, and API debugging so you are credible in both support and product conversations.",
                "recommended": True,
            },
            {
                "title": "Portfolio-first route",
                "duration": "9-12 months",
                "description": "Use mock ticket queues, CRM workflows, and troubleshooting playbooks to prove readiness before applying.",
                "recommended": False,
            },
        ],
        "steps": [
            {
                "title": "Customer Support Executive",
                "time_estimate": "1-2 months",
                "timeline": "Month 1-2",
                "objective": "Learn structured customer communication, ticket hygiene, and service-level ownership.",
                "technical_skills": ["communication", "ticket handling", "email support", "chat support"],
                "soft_skills": ["empathy", "active listening", "time management"],
                "tools": ["Zendesk", "Freshdesk", "Google Workspace"],
                "learning_resources": ["Customer support fundamentals", "Support ticket workflow practice"],
                "certifications": ["Zendesk support basics"],
                "projects": ["Create sample customer query handling templates", "Build an FAQ and escalation matrix"],
                "salary_india": "INR 2.4-4.0 LPA",
            },
            {
                "title": "CRM Specialist",
                "time_estimate": "2-3 months",
                "timeline": "Month 3-5",
                "objective": "Own CRM records, lifecycle stages, and support-to-sales handoffs with clean documentation.",
                "technical_skills": ["crm concepts", "excel", "customer lifecycle", "data hygiene"],
                "soft_skills": ["documentation", "stakeholder communication", "follow-through"],
                "tools": ["Salesforce", "HubSpot", "Excel"],
                "learning_resources": ["CRM workflow fundamentals", "Spreadsheet cleanup and reporting drills"],
                "certifications": ["HubSpot CRM Certification"],
                "projects": ["Build a sample CRM workflow in HubSpot free version", "Create a customer status dashboard in Excel"],
                "salary_india": "INR 3.0-5.0 LPA",
            },
            {
                "title": "Technical Support Associate",
                "time_estimate": "2-3 months",
                "timeline": "Month 6-8",
                "objective": "Move from process support into issue triage, environment checks, and technical troubleshooting.",
                "technical_skills": ["networking basics", "linux", "sql", "troubleshooting"],
                "soft_skills": ["problem solving", "calm escalation", "root-cause thinking"],
                "tools": ["Linux", "MySQL", "Postman"],
                "learning_resources": ["Linux and command-line basics", "SQL query practice", "Postman collections walkthrough"],
                "certifications": ["Google IT Support fundamentals"],
                "projects": ["Create a troubleshooting guide for common system issues", "Write SQL queries for support reporting"],
                "salary_india": "INR 4.0-6.5 LPA",
            },
        ],
        "target_template": {
            "time_estimate": "2-3 months",
            "timeline": "Month 9-11",
            "objective": "Be ready to diagnose product issues, analyze logs, and work with engineering on reproducible bugs.",
            "technical_skills": ["debugging", "log analysis", "api basics", "sql", "incident triage"],
            "soft_skills": ["customer handling", "cross-team communication", "prioritization"],
            "tools": ["Postman", "Grafana", "Jira", "SQL client"],
            "learning_resources": ["API troubleshooting practice", "Production incident review exercises"],
            "certifications": ["Postman API fundamentals"],
            "projects": ["Build a product issue triage playbook", "Create an API error reproduction and log-analysis notebook"],
            "salary_india": "INR 5.5-9.0 LPA",
        },
    },
    "data": {
        "starter_skills": ["excel", "sql", "python", "statistics", "data visualization"],
        "total_time": "7-10 months",
        "route_options": [
            {
                "title": "Analytics-first route",
                "duration": "6-8 months",
                "description": "Start with reporting and dashboards, then deepen into SQL, Python, and stakeholder storytelling.",
                "recommended": True,
            },
            {
                "title": "Portfolio-heavy route",
                "duration": "8-10 months",
                "description": "Use public datasets and case studies to prove business problem solving before applying widely.",
                "recommended": False,
            },
        ],
        "steps": [
            {
                "title": "Reporting Analyst Intern",
                "time_estimate": "1-2 months",
                "timeline": "Month 1-2",
                "objective": "Build confidence with spreadsheets, basic cleaning, and recurring business reports.",
                "technical_skills": ["excel", "data cleaning", "basic formulas", "reporting"],
                "soft_skills": ["attention to detail", "communication", "consistency"],
                "tools": ["Excel", "Google Sheets"],
                "learning_resources": ["Spreadsheet analysis fundamentals", "Intro reporting exercises"],
                "certifications": ["Excel Skills for Business"],
                "projects": ["Create a weekly business KPI tracker", "Clean and summarize a public CSV dataset"],
                "salary_india": "INR 2.5-4.5 LPA",
            },
            {
                "title": "Junior Data Analyst",
                "time_estimate": "2-3 months",
                "timeline": "Month 3-5",
                "objective": "Move from spreadsheet reporting into SQL-based analysis and metric storytelling.",
                "technical_skills": ["sql", "joins", "aggregations", "dashboarding"],
                "soft_skills": ["business thinking", "clarity", "question framing"],
                "tools": ["SQL", "Tableau", "Power BI"],
                "learning_resources": ["SQL query practice", "Dashboard design patterns"],
                "certifications": ["Microsoft Power BI Data Analyst"],
                "projects": ["Build a sales or retention dashboard", "Write SQL queries for cohort analysis"],
                "salary_india": "INR 4.0-6.5 LPA",
            },
            {
                "title": "Analytics Associate",
                "time_estimate": "2 months",
                "timeline": "Month 6-7",
                "objective": "Handle cleaner datasets, build repeatable analyses, and explain insights with business impact.",
                "technical_skills": ["python", "pandas", "data visualization", "analytics storytelling"],
                "soft_skills": ["presentation", "ownership", "stakeholder alignment"],
                "tools": ["Python", "Pandas", "Jupyter", "Power BI"],
                "learning_resources": ["Python data analysis workflow", "Visualization best practices"],
                "certifications": ["Google Data Analytics Certificate"],
                "projects": ["Analyze a public product or operations dataset end to end", "Publish a notebook and dashboard pair"],
                "salary_india": "INR 5.0-8.0 LPA",
            },
        ],
        "target_template": {
            "time_estimate": "2-3 months",
            "timeline": "Month 8-10",
            "objective": "Show that you can move from raw data to business decisions with clean analysis and strong communication.",
            "technical_skills": ["sql", "python", "dashboarding", "statistics", "business analysis"],
            "soft_skills": ["stakeholder communication", "problem solving", "decision support"],
            "tools": ["SQL", "Python", "Tableau", "Power BI"],
            "learning_resources": ["Case-study based analytics practice", "Interview-focused SQL drills"],
            "certifications": ["Google Data Analytics Certificate"],
            "projects": ["Build a decision-ready analytics case study", "Create a portfolio page with dashboards and business recommendations"],
            "salary_india": "INR 6.0-10.0 LPA",
        },
    },
    "frontend": {
        "starter_skills": ["html", "css", "javascript", "react", "responsive design"],
        "total_time": "7-10 months",
        "route_options": [
            {
                "title": "UI foundation route",
                "duration": "6-8 months",
                "description": "Master HTML, CSS, JavaScript, and component composition before optimizing polish and performance.",
                "recommended": True,
            },
            {
                "title": "Design-heavy route",
                "duration": "8-10 months",
                "description": "Pair frontend engineering with stronger Figma, UX reasoning, and interaction design proof.",
                "recommended": False,
            },
        ],
        "steps": [
            {
                "title": "Web Design Intern",
                "time_estimate": "1-2 months",
                "timeline": "Month 1-2",
                "objective": "Learn page structure, visual hierarchy, and clean responsive layout habits.",
                "technical_skills": ["html", "css", "responsive design", "basic javascript"],
                "soft_skills": ["visual detail", "feedback handling", "consistency"],
                "tools": ["VS Code", "Figma", "Git"],
                "learning_resources": ["Responsive web design fundamentals", "Figma to HTML practice"],
                "certifications": ["Responsive Web Design"],
                "projects": ["Rebuild a landing page from a Figma reference", "Create a responsive multi-section product page"],
                "salary_india": "INR 2.5-4.5 LPA",
            },
            {
                "title": "Junior Frontend Developer",
                "time_estimate": "2-3 months",
                "timeline": "Month 3-5",
                "objective": "Build reusable components, stateful UI flows, and cleaner application structure.",
                "technical_skills": ["javascript", "react", "component design", "api integration"],
                "soft_skills": ["debugging", "collaboration", "ownership"],
                "tools": ["React", "Git", "Vite"],
                "learning_resources": ["Modern React workflow", "Component architecture walkthroughs"],
                "certifications": ["React developer path"],
                "projects": ["Build a reusable dashboard UI", "Consume an API and present filtered search results"],
                "salary_india": "INR 4.5-7.0 LPA",
            },
            {
                "title": "Frontend Engineer",
                "time_estimate": "2 months",
                "timeline": "Month 6-7",
                "objective": "Improve production readiness with routing, forms, validation, and performance-aware UI patterns.",
                "technical_skills": ["state management", "routing", "forms", "performance basics"],
                "soft_skills": ["trade-off thinking", "testing discipline", "clear communication"],
                "tools": ["React", "Tailwind CSS", "Testing Library"],
                "learning_resources": ["Production-ready frontend patterns", "Accessibility and testing guides"],
                "certifications": ["Frontend testing essentials"],
                "projects": ["Ship a multi-page application with auth and forms", "Audit and improve accessibility on a UI project"],
                "salary_india": "INR 6.0-10.0 LPA",
            },
        ],
        "target_template": {
            "time_estimate": "2-3 months",
            "timeline": "Month 8-10",
            "objective": "Demonstrate that you can build polished, fast, and maintainable product interfaces.",
            "technical_skills": ["react", "javascript", "ui architecture", "testing", "performance optimization"],
            "soft_skills": ["product thinking", "collaboration", "ownership"],
            "tools": ["React", "Tailwind CSS", "Figma", "Testing Library"],
            "learning_resources": ["Frontend system design interviews", "Performance optimization case studies"],
            "certifications": ["Advanced React path"],
            "projects": ["Build and deploy a polished product workflow", "Write a technical case study for a UI feature"],
            "salary_india": "INR 7.0-12.0 LPA",
        },
    },
    "full_stack": {
        "starter_skills": ["html", "css", "javascript", "react", "apis", "sql"],
        "total_time": "8-11 months",
        "route_options": [
            {
                "title": "Balanced builder route",
                "duration": "8-10 months",
                "description": "Build frontend confidence and backend fundamentals together so you can ship end-to-end projects.",
                "recommended": True,
            },
            {
                "title": "Backend-leaning route",
                "duration": "9-11 months",
                "description": "Prioritize APIs and data modeling first, then add enough UI depth to present a polished product.",
                "recommended": False,
            },
        ],
        "steps": [
            {
                "title": "Web Development Intern",
                "time_estimate": "1-2 months",
                "timeline": "Month 1-2",
                "objective": "Strengthen page structure, JavaScript basics, and Git workflow with visible project proof.",
                "technical_skills": ["html", "css", "javascript", "git"],
                "soft_skills": ["learning velocity", "consistency", "feedback handling"],
                "tools": ["VS Code", "Git", "Figma"],
                "learning_resources": ["Responsive UI practice", "JavaScript workflow basics"],
                "certifications": ["Responsive Web Design"],
                "projects": ["Build a responsive product landing page", "Create a vanilla JavaScript CRUD interface"],
                "salary_india": "INR 3.0-5.0 LPA",
            },
            {
                "title": "Junior Full Stack Developer",
                "time_estimate": "2-3 months",
                "timeline": "Month 3-5",
                "objective": "Connect UI, API, and database work inside one coherent application workflow.",
                "technical_skills": ["react", "rest api", "sql", "authentication"],
                "soft_skills": ["debugging", "ownership", "collaboration"],
                "tools": ["React", "FastAPI", "PostgreSQL", "Postman"],
                "learning_resources": ["End-to-end CRUD application patterns", "Database-backed frontend projects"],
                "certifications": ["Full-stack web development path"],
                "projects": ["Build an auth-enabled full-stack app", "Document API and UI flows together"],
                "salary_india": "INR 5.0-8.0 LPA",
            },
            {
                "title": "Full Stack Engineer",
                "time_estimate": "2-3 months",
                "timeline": "Month 6-8",
                "objective": "Improve reliability, testing, and deployment while balancing product UX and backend design.",
                "technical_skills": ["react", "api design", "testing", "deployment"],
                "soft_skills": ["trade-off thinking", "communication", "ownership"],
                "tools": ["React", "FastAPI", "Docker", "Render"],
                "learning_resources": ["Production app deployment", "Testing and architecture guides"],
                "certifications": ["Cloud or Docker fundamentals"],
                "projects": ["Deploy a production-style full-stack app", "Write a short architecture case study"],
                "salary_india": "INR 7.0-11.0 LPA",
            },
        ],
        "target_template": {
            "time_estimate": "2-3 months",
            "timeline": "Month 9-11",
            "objective": "Show that you can ship and explain a polished product from UI to backend and deployment.",
            "technical_skills": ["react", "apis", "sql", "testing", "deployment"],
            "soft_skills": ["product thinking", "ownership", "collaboration"],
            "tools": ["React", "FastAPI", "PostgreSQL", "Docker"],
            "learning_resources": ["Full-stack case studies", "Interview-focused project walkthrough practice"],
            "certifications": ["Full-stack developer path"],
            "projects": ["Ship one standout full-stack application with docs, tests, and demo video", "Prepare a system walkthrough deck"],
            "salary_india": "INR 8.0-14.0 LPA",
        },
    },
    "backend": {
        "starter_skills": ["python", "apis", "sql", "git", "backend fundamentals"],
        "total_time": "8-11 months",
        "route_options": [
            {
                "title": "API-first route",
                "duration": "7-9 months",
                "description": "Focus on server-side fundamentals, database work, and API design early.",
                "recommended": True,
            },
            {
                "title": "Full-stack bridge route",
                "duration": "9-11 months",
                "description": "Pair backend depth with enough frontend exposure to ship complete portfolio proof.",
                "recommended": False,
            },
        ],
        "steps": [
            {
                "title": "Software Development Intern",
                "time_estimate": "1-2 months",
                "timeline": "Month 1-2",
                "objective": "Strengthen coding habits, Git workflow, and basic scripting or API exposure.",
                "technical_skills": ["python", "git", "problem solving", "basic sql"],
                "soft_skills": ["learning velocity", "ownership", "communication"],
                "tools": ["Python", "Git", "VS Code"],
                "learning_resources": ["Python application fundamentals", "Git workflow practice"],
                "certifications": ["Python developer fundamentals"],
                "projects": ["Build a command-line CRUD tool", "Create a small data-processing script"],
                "salary_india": "INR 3.0-5.0 LPA",
            },
            {
                "title": "Junior Backend Developer",
                "time_estimate": "2-3 months",
                "timeline": "Month 3-5",
                "objective": "Build APIs, model data cleanly, and handle authentication and validation basics.",
                "technical_skills": ["rest api", "fastapi", "sql", "authentication"],
                "soft_skills": ["debugging", "documentation", "code review readiness"],
                "tools": ["FastAPI", "PostgreSQL", "Postman"],
                "learning_resources": ["API design patterns", "Database schema design basics"],
                "certifications": ["Back End Development and APIs Certification (freeCodeCamp)"],
                "projects": ["Build an auth-enabled CRUD API", "Document endpoints with examples and tests"],
                "salary_india": "INR 5.0-8.0 LPA",
            },
            {
                "title": "Backend Engineer",
                "time_estimate": "2-3 months",
                "timeline": "Month 6-8",
                "objective": "Improve service structure, testing, error handling, and deployment maturity.",
                "technical_skills": ["service architecture", "testing", "deployment", "performance basics"],
                "soft_skills": ["trade-off thinking", "ownership", "incident response"],
                "tools": ["FastAPI", "Docker", "PostgreSQL", "Render"],
                "learning_resources": ["Deployment workflow practice", "Testing and reliability guides"],
                "certifications": ["Docker or cloud fundamentals"],
                "projects": ["Deploy a production-style API", "Add monitoring, retries, and clean docs to a service"],
                "salary_india": "INR 7.0-11.0 LPA",
            },
        ],
        "target_template": {
            "time_estimate": "2-3 months",
            "timeline": "Month 9-11",
            "objective": "Demonstrate that you can build reliable backend services with production thinking.",
            "technical_skills": ["api design", "sql", "testing", "deployment", "debugging"],
            "soft_skills": ["clarity", "ownership", "cross-team communication"],
            "tools": ["FastAPI", "Docker", "PostgreSQL", "GitHub Actions"],
            "learning_resources": ["Backend case studies", "System design interview practice"],
            "certifications": ["Cloud practitioner basics"],
            "projects": ["Ship a deployed backend project with docs and tests", "Write an architecture walkthrough for one service"],
            "salary_india": "INR 8.0-14.0 LPA",
        },
    },
    "marketing": {
        "starter_skills": ["content writing", "seo", "campaign basics", "analytics", "communication"],
        "total_time": "6-9 months",
        "route_options": [
            {
                "title": "Content-to-growth route",
                "duration": "6-8 months",
                "description": "Start with content and social execution, then move into analytics and performance loops.",
                "recommended": True,
            },
            {
                "title": "Analytics-heavy route",
                "duration": "7-9 months",
                "description": "Use dashboards, attribution thinking, and campaign measurement as your differentiator.",
                "recommended": False,
            },
        ],
        "steps": [
            {
                "title": "Content Marketing Intern",
                "time_estimate": "1-2 months",
                "timeline": "Month 1-2",
                "objective": "Build execution discipline around content calendars and basic audience research.",
                "technical_skills": ["content writing", "social media", "market research", "basic seo"],
                "soft_skills": ["creativity", "consistency", "communication"],
                "tools": ["Canva", "Notion", "Google Docs"],
                "learning_resources": ["Content planning fundamentals", "SEO basics for marketers"],
                "certifications": ["Google SEO Fundamentals"],
                "projects": ["Create a one-month content calendar", "Audit and rewrite landing-page copy"],
                "salary_india": "INR 2.4-4.0 LPA",
            },
            {
                "title": "Marketing Executive",
                "time_estimate": "2-3 months",
                "timeline": "Month 3-5",
                "objective": "Run campaigns with better structure, reporting, and messaging feedback loops.",
                "technical_skills": ["campaign execution", "seo", "email marketing", "basic analytics"],
                "soft_skills": ["coordination", "copy clarity", "ownership"],
                "tools": ["Mailchimp", "Google Analytics", "Canva"],
                "learning_resources": ["Campaign reporting practice", "Email lifecycle basics"],
                "certifications": ["Google Analytics fundamentals"],
                "projects": ["Launch a mock lead-generation campaign", "Build a weekly marketing performance dashboard"],
                "salary_india": "INR 3.5-6.0 LPA",
            },
            {
                "title": "Growth Marketing Associate",
                "time_estimate": "2 months",
                "timeline": "Month 6-7",
                "objective": "Tie campaigns to funnel metrics, experiments, and clearer optimization decisions.",
                "technical_skills": ["funnel analysis", "a/b testing", "google analytics", "performance reporting"],
                "soft_skills": ["experiment thinking", "prioritization", "storytelling"],
                "tools": ["Google Analytics", "Looker Studio", "Meta Ads"],
                "learning_resources": ["Growth experimentation fundamentals", "Marketing dashboard design"],
                "certifications": ["Google Analytics certification prep"],
                "projects": ["Build a funnel dashboard", "Design an experiment tracker for paid and organic campaigns"],
                "salary_india": "INR 5.0-8.0 LPA",
            },
        ],
        "target_template": {
            "time_estimate": "2 months",
            "timeline": "Month 8-9",
            "objective": "Show that you can connect channel execution to measurable pipeline or revenue outcomes.",
            "technical_skills": ["analytics", "seo", "campaign strategy", "reporting", "experimentation"],
            "soft_skills": ["communication", "ownership", "decision making"],
            "tools": ["Google Analytics", "Looker Studio", "Mailchimp", "Ads Manager"],
            "learning_resources": ["Performance marketing case studies", "Experiment review practice"],
            "certifications": ["Google Analytics certification"],
            "projects": ["Create a full-funnel marketing case study", "Present a monthly growth review deck"],
            "salary_india": "INR 6.0-10.0 LPA",
        },
    },
    "finance": {
        "starter_skills": ["excel", "accounting", "financial analysis", "forecasting", "communication"],
        "total_time": "7-10 months",
        "route_options": [
            {
                "title": "Core finance route",
                "duration": "7-9 months",
                "description": "Strengthen accounting and Excel first, then move into modeling and business review work.",
                "recommended": True,
            },
            {
                "title": "Operations-to-finance route",
                "duration": "8-10 months",
                "description": "Use reporting and operational discipline as the bridge into analysis-heavy finance roles.",
                "recommended": False,
            },
        ],
        "steps": [
            {
                "title": "Accounts Executive",
                "time_estimate": "1-2 months",
                "timeline": "Month 1-2",
                "objective": "Build fluency in ledgers, reconciliations, and structured finance operations.",
                "technical_skills": ["accounting basics", "excel", "reconciliation", "financial records"],
                "soft_skills": ["accuracy", "discipline", "communication"],
                "tools": ["Excel", "Tally", "Google Sheets"],
                "learning_resources": ["Accounting refreshers", "Excel finance workflows"],
                "certifications": ["Excel Skills for Business"],
                "projects": ["Create a monthly reconciliation template", "Build an expense tracking workbook"],
                "salary_india": "INR 2.8-4.8 LPA",
            },
            {
                "title": "Financial Analyst",
                "time_estimate": "2-3 months",
                "timeline": "Month 3-5",
                "objective": "Move from records into variance review, insights, and decision-support reporting.",
                "technical_skills": ["financial analysis", "forecasting", "variance analysis", "reporting"],
                "soft_skills": ["presentation", "business thinking", "problem solving"],
                "tools": ["Excel", "PowerPoint", "ERP"],
                "learning_resources": ["Forecasting practice", "Financial storytelling drills"],
                "certifications": ["Financial Modeling for Beginners"],
                "projects": ["Build a revenue and cost model", "Create a monthly finance review deck"],
                "salary_india": "INR 4.5-7.5 LPA",
            },
            {
                "title": "Business Finance Associate",
                "time_estimate": "2 months",
                "timeline": "Month 6-7",
                "objective": "Connect finance outputs with business planning and management conversations.",
                "technical_skills": ["financial modeling", "forecasting", "business reviews", "scenario analysis"],
                "soft_skills": ["stakeholder management", "clarity", "ownership"],
                "tools": ["Excel", "Power BI", "ERP"],
                "learning_resources": ["Scenario modeling", "Business review deck preparation"],
                "certifications": ["Financial modeling certificate"],
                "projects": ["Build a three-scenario forecast model", "Create a KPI dashboard for leadership review"],
                "salary_india": "INR 6.0-9.5 LPA",
            },
        ],
        "target_template": {
            "time_estimate": "2-3 months",
            "timeline": "Month 8-10",
            "objective": "Be ready to support planning, forecasting, and decision making with structured finance analysis.",
            "technical_skills": ["financial modeling", "forecasting", "analysis", "excel", "business communication"],
            "soft_skills": ["clarity", "stakeholder communication", "ownership"],
            "tools": ["Excel", "Power BI", "ERP", "PowerPoint"],
            "learning_resources": ["Case-based finance analysis practice", "Interview-driven accounting refreshers"],
            "certifications": ["Financial modeling certificate"],
            "projects": ["Present a business finance case study", "Publish a finance dashboard and model pack"],
            "salary_india": "INR 7.0-12.0 LPA",
        },
    },
    "generic": {
        "starter_skills": ["communication", "problem solving", "excel", "documentation", "git"],
        "total_time": "6-9 months",
        "route_options": [
            {
                "title": "Practical bridge route",
                "duration": "6-9 months",
                "description": "Use adjacent entry-level roles plus visible project proof to move toward the target role with less risk.",
                "recommended": True,
            }
        ],
        "steps": [
            {
                "title": "Operations Assistant",
                "time_estimate": "1-2 months",
                "timeline": "Month 1-2",
                "objective": "Strengthen execution discipline, stakeholder communication, and process ownership.",
                "technical_skills": ["excel", "documentation", "process basics", "communication"],
                "soft_skills": ["reliability", "organization", "adaptability"],
                "tools": ["Excel", "Google Workspace", "Notion"],
                "learning_resources": ["Professional communication basics", "Process improvement exercises"],
                "certifications": ["Foundational productivity tools"],
                "projects": ["Document and improve one workflow", "Create a simple reporting tracker"],
                "salary_india": "INR 2.5-4.5 LPA",
            },
            {
                "title": "Coordinator",
                "time_estimate": "2-3 months",
                "timeline": "Month 3-5",
                "objective": "Own a repeatable workflow, communicate status clearly, and show dependable delivery.",
                "technical_skills": ["reporting", "workflow management", "analysis basics", "documentation"],
                "soft_skills": ["ownership", "clarity", "follow-through"],
                "tools": ["Excel", "Notion", "Project tracker"],
                "learning_resources": ["Workflow planning", "Basic analysis and presentation"],
                "certifications": ["Project coordination basics"],
                "projects": ["Build a recurring status dashboard", "Present a process-improvement mini case study"],
                "salary_india": "INR 3.5-6.0 LPA",
            },
            {
                "title": "Specialist",
                "time_estimate": "2 months",
                "timeline": "Month 6-7",
                "objective": "Develop deeper task ownership in the closest adjacent area to the final target role.",
                "technical_skills": ["specialized workflow", "analysis", "tools fluency", "problem solving"],
                "soft_skills": ["prioritization", "ownership", "communication"],
                "tools": ["Role-specific tools", "Excel", "Documentation stack"],
                "learning_resources": ["Guided skill specialization", "Role-specific practice projects"],
                "certifications": ["Target-role guided certification"],
                "projects": ["Ship a small portfolio proof aligned to the target role", "Write a concise case study"],
                "salary_india": "INR 4.5-7.5 LPA",
            },
        ],
        "target_template": {
            "time_estimate": "2 months",
            "timeline": "Month 8-9",
            "objective": "Package your adjacent experience, proof of work, and role-specific skills into a credible transition story.",
            "technical_skills": ["role fundamentals", "analysis", "problem solving", "communication", "documentation"],
            "soft_skills": ["ownership", "learning agility", "collaboration"],
            "tools": ["Role-specific tools", "Documentation stack", "Portfolio platform"],
            "learning_resources": ["Target-role fundamentals", "Interview and case-study practice"],
            "certifications": ["Target-role guided certification"],
            "projects": ["Build one strong role-aligned portfolio proof", "Create a concise transition deck or case study"],
            "salary_india": "INR 5.0-8.5 LPA",
        },
    },
}


FAMILY_KEYWORDS = [
    ("product_support", ["product support", "technical support", "support engineer", "support", "crm", "helpdesk", "customer success"]),
    ("full_stack", ["full stack", "fullstack"]),
    ("frontend", ["frontend", "front end", "ui developer", "react", "web developer"]),
    ("backend", ["backend", "back end", "api", "server", "python developer"]),
    ("data", ["data", "analytics", "analyst", "bi", "business intelligence", "scientist"]),
    ("marketing", ["marketing", "seo", "content", "growth", "digital marketing"]),
    ("finance", ["finance", "financial", "accounts", "accounting", "fp&a"]),
]


def _unique(items: list[str], limit: int | None = None) -> list[str]:
    seen: set[str] = set()
    result: list[str] = []
    for item in items:
        clean = str(item or "").strip()
        if not clean:
            continue
        key = clean.lower()
        if key in seen:
            continue
        seen.add(key)
        result.append(clean)
        if limit and len(result) >= limit:
            break
    return result


def _detect_family(target_role: str, domain: str) -> str:
    haystack = f"{target_role} {domain}".lower()
    for family, keywords in FAMILY_KEYWORDS:
        if any(keyword in haystack for keyword in keywords):
            return family
    return "generic"


def _starter_skills(target_role: str, domain: str = "") -> list[str]:
    family = _detect_family(target_role, domain)
    return FAMILY_BLUEPRINTS.get(family, FAMILY_BLUEPRINTS["generic"])["starter_skills"]


def _slugify_course_id(value: str) -> str:
    normalized = re.sub(r"[^a-z0-9]+", "_", value.strip().lower()).strip("_")
    return normalized or "roadmap_resource"


def _course_reference(course_id: str, title: str | None = None) -> dict[str, str]:
    reference = {"course_id": course_id}
    if title:
        reference["title"] = title
    return reference


def _course_reference_from_title(title: str) -> dict[str, str]:
    clean = str(title or "").strip()
    mapped_course_id = LEGACY_TITLE_TO_COURSE_ID.get(clean.lower())
    course_id = mapped_course_id or _slugify_course_id(clean)
    resolved_title = COURSE_TITLE_BY_ID.get(course_id, clean)
    return _course_reference(course_id, resolved_title)


def _course_for_skill(skill: str) -> dict[str, str]:
    clean = str(skill or "").strip()
    if not clean:
        return _course_reference("roadmap_resource", "Guided course")

    course_id = COURSE_ID_BY_SKILL.get(clean.lower())
    if course_id:
        return _course_reference(course_id, COURSE_TITLE_BY_ID[course_id])

    return _course_reference_from_title(f"{clean.title()} guided course")


def _roadmap_item_key(item: Any) -> str:
    if isinstance(item, dict):
        course_id = str(item.get("course_id") or "").strip().lower()
        if course_id:
            return f"course:{course_id}"
        title = str(item.get("title") or "").strip().lower()
        if title:
            return f"title:{title}"
    return f"text:{str(item or '').strip().lower()}"


def _unique_roadmap_items(items: list[Any], limit: int | None = None) -> list[Any]:
    seen: set[str] = set()
    result: list[Any] = []
    for item in items:
        if isinstance(item, str):
            clean = item.strip()
            if not clean:
                continue
            normalized_item: Any = _course_reference_from_title(clean)
        else:
            normalized_item = item

        key = _roadmap_item_key(normalized_item)
        if key in seen:
            continue
        seen.add(key)
        result.append(normalized_item)
        if limit and len(result) >= limit:
            break
    return result


def _salary_region(location: str) -> str:
    location_lower = (location or "").strip().lower()
    india_markers = {
        "india",
        "remote",
        "bangalore",
        "bengaluru",
        "hyderabad",
        "chennai",
        "mumbai",
        "pune",
        "delhi",
        "gurgaon",
        "noida",
        "kolkata",
        "ahmedabad",
        "kochi",
    }
    if not location_lower or any(marker in location_lower for marker in india_markers):
        return "India"
    return "Your market"


def _salary_text(step: dict[str, Any], region: str) -> str:
    if region == "India":
        return step.get("salary_india", "INR 4.0-7.0 LPA")
    return step.get("salary_global", "Varies by location and company tier")


def _experience_snapshot(experience_level: str, years_of_experience: float, domain: str, current_skills: list[str]) -> tuple[str, str]:
    level = (experience_level or "student").lower()
    skills_line = ", ".join(current_skills[:3]) if current_skills else "foundational transferable skills"
    if level == "student":
        label = f"Student profile in {domain or 'your chosen domain'}"
        snapshot = f"You are starting from a student or learner profile and already have traction in {skills_line}."
    elif level == "fresher":
        label = f"Fresher in {domain or 'your domain'}"
        snapshot = f"You are in the early-career stage with roughly {years_of_experience or 0:.1f} years of experience and exposure to {skills_line}."
    elif level == "entry":
        label = f"Entry-level professional in {domain or 'your domain'}"
        snapshot = f"You already have entry-level experience and can use {skills_line} as the bridge into the next role."
    elif level in {"mid", "senior", "lead"}:
        label = f"{experience_level.title()} professional pivoting into {domain or 'your target domain'}"
        snapshot = f"You already bring real work experience, so this route focuses on closing domain-specific gaps around {skills_line}."
    else:
        label = f"Current profile in {domain or 'your domain'}"
        snapshot = f"You can build from your current strengths in {skills_line} and translate them into the target role."
    return label, snapshot


def _build_learning_stages(target_role: str, missing_skills: list[str], starter_skills: list[str]) -> list[dict[str, Any]]:
    skills = missing_skills[:6] or starter_skills
    beginner = skills[:2] or starter_skills[:2]
    intermediate = skills[2:4] or starter_skills[2:4]
    advanced = skills[4:6] or starter_skills[-2:]

    stages = []
    labels = [("Beginner", "0-30 days"), ("Intermediate", "31-60 days"), ("Advanced", "61-90 days")]
    milestone_lookup = {
        "Beginner": "Finish core fundamentals and build one guided mini-project.",
        "Intermediate": "Apply the new skills in a portfolio-ready project and prepare it for deployment.",
        "Advanced": "Deploy the project, document decisions clearly, and prepare interview walkthroughs.",
    }

    for (label, days), focus in zip(labels, [beginner, intermediate, advanced]):
        stages.append(
            {
                "stage": label,
                "days": days,
                "focus": focus,
                "courses": _unique_roadmap_items([_course_for_skill(skill) for skill in focus], limit=3),
                "milestone": milestone_lookup[label],
            }
        )
    return stages


def _derive_readiness_score(
    current_readiness_score: float | None,
    matched_skills: list[str],
    missing_skills: list[str],
    years_of_experience: float,
) -> tuple[float, float, str]:
    if current_readiness_score is None:
        current = 42 + (len(matched_skills[:6]) * 5) - (len(missing_skills[:6]) * 2) + min(years_of_experience, 4) * 4
    else:
        current = float(current_readiness_score)
    current = max(28.0, min(round(current, 1), 88.0))
    projected = max(current + 18, 76.0)
    projected += min(len(missing_skills[:5]) * 1.5, 8.0)
    projected = max(current + 6, min(round(projected, 1), 93.0))

    if projected >= 88:
        label = "Strong interview-ready trajectory"
    elif projected >= 80:
        label = "Good target-role readiness"
    else:
        label = "Needs focused execution, but realistic"
    return current, projected, label


def _build_route_steps(
    family_config: dict[str, Any],
    target_role: str,
    missing_skills: list[str],
    trending_skills: list[str],
    salary_region: str,
) -> list[dict[str, Any]]:
    dynamic_skills = _unique(missing_skills[:6] + trending_skills[:4] + family_config["starter_skills"], limit=8)
    source_steps = family_config["steps"] + [{"title": target_role.title(), **family_config["target_template"]}]

    built_steps: list[dict[str, Any]] = []
    for index, step in enumerate(source_steps, start=1):
        focus_window = dynamic_skills[max(0, index - 1): max(0, index - 1) + 2]
        technical_skills = _unique(step["technical_skills"] + focus_window + family_config["starter_skills"], limit=6)
        learning_resources = _unique_roadmap_items(step["learning_resources"] + [_course_for_skill(skill) for skill in technical_skills[:2]], limit=5)
        certifications = _unique_roadmap_items(step["certifications"] + [_course_for_skill(technical_skills[0])], limit=3)
        projects = _unique(step["projects"], limit=3)

        built_steps.append(
            {
                "step_number": index,
                "role_title": step["title"],
                "step_type": "target" if index == len(source_steps) else "transition",
                "time_estimate": step["time_estimate"],
                "cumulative_timeline": step["timeline"],
                "objective": step["objective"],
                "technical_skills": technical_skills,
                "soft_skills": _unique(step["soft_skills"], limit=4),
                "tools": _unique(step["tools"], limit=5),
                "learning_resources": learning_resources,
                "certifications": certifications,
                "projects": projects,
                "salary_range": _salary_text(step, salary_region),
            }
        )

    return built_steps


def generate_learning_roadmap(
    target_role: str,
    missing_skills: list[str],
    domain: str,
    mode: str,
    current_skills: list[str] | None = None,
    experience_level: str = "student",
    years_of_experience: float = 0.0,
    location: str = "",
    current_readiness_score: float | None = None,
    matched_skills: list[str] | None = None,
    trending_skills: list[str] | None = None,
) -> dict:
    target_role = (target_role or f"{domain} {mode}".strip()).strip()
    current_skills = current_skills or []
    matched_skills = matched_skills or []
    trending_skills = trending_skills or []

    family = _detect_family(target_role, domain)
    family_config = FAMILY_BLUEPRINTS.get(family, FAMILY_BLUEPRINTS["generic"])
    starter_skills = family_config["starter_skills"]
    salary_region = _salary_region(location)

    current_label, current_snapshot = _experience_snapshot(experience_level, years_of_experience, domain, current_skills)
    stages = _build_learning_stages(target_role, missing_skills, starter_skills)
    steps = _build_route_steps(family_config, target_role, missing_skills, trending_skills, salary_region)
    current_score, projected_score, readiness_label = _derive_readiness_score(
        current_readiness_score,
        matched_skills or current_skills,
        missing_skills,
        years_of_experience,
    )

    final_skills = _unique(
        [skill for step in steps for skill in step["technical_skills"][:3]] + matched_skills[:3] + trending_skills[:3],
        limit=10,
    )
    expected_salary_range = steps[-1]["salary_range"] if steps else "Varies by market"
    recommended_projects = _unique(
        [project for step in steps for project in step["projects"][:1]]
        + [
            f"Publish a visible portfolio proof aligned to {target_role.title()} hiring expectations.",
            "Create a one-page transition story showing skills gained, projects shipped, and impact evidence.",
        ],
        limit=6,
    )

    readiness_summary = (
        f"You are currently around {round(current_score)}/100 for {target_role.title()}-style opportunities. "
        f"If you complete the stepping-stone roles, projects, and the 90-day skill sprint, you can realistically move toward "
        f"{round(projected_score)}/100 readiness."
    )

    return {
        "target_role": target_role.title(),
        "summary": (
            f"This career path connects your current profile to {target_role.title()} through realistic stepping-stone roles, "
            f"clear skill checkpoints, and a supporting 30/60/90-day learning sprint."
        ),
        "current_profile": {
            "label": current_label,
            "snapshot": current_snapshot,
            "experience_level": experience_level,
            "years_of_experience": years_of_experience,
            "strengths": _unique((matched_skills or current_skills or starter_skills)[:5], limit=5),
            "priority_gaps": _unique(missing_skills[:5] or starter_skills[:4], limit=5),
        },
        "route_options": family_config["route_options"],
        "steps": steps,
        "outcome": {
            "total_time_estimate": family_config["total_time"],
            "current_readiness_score": current_score,
            "projected_readiness_score": projected_score,
            "readiness_label": readiness_label,
            "readiness_summary": readiness_summary,
            "expected_salary_range": expected_salary_range,
            "salary_region": salary_region,
            "final_skills": final_skills,
        },
        "stages": stages,
        "recommended_projects": recommended_projects,
        "deployment_checklist": [
            "Add a clear README or case-study note for every major project milestone.",
            "Track each step with one visible proof artifact: dashboard, app, playbook, workflow, or slide deck.",
            "Refresh your resume and LinkedIn after every milestone role or project so recruiters see forward movement.",
            "Prepare two STAR stories and one technical walkthrough for each stepping-stone stage.",
            "Apply only after your portfolio proof, keywords, and interview stories match the target role language.",
        ],
    }
