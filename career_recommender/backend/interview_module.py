def generate_interview_pack(job_role: str, skills: list[str], experience_level: str) -> dict:
    job_role = job_role or "target role"
    core_skills = skills[:4] or ["problem solving", "communication", "technical fundamentals"]

    technical_questions = [
        f"Walk me through a project where you used {skill} and explain the trade-offs you made."
        for skill in core_skills
    ]
    technical_questions.extend(
        [
            f"How would you design a scalable solution for a {job_role} use case?",
            "How do you debug production issues systematically?",
            "What metrics would you track to evaluate success for your work?",
        ]
    )

    hr_questions = [
        "Tell me about yourself and why this role interests you.",
        "Describe a time you handled a difficult deadline or changing requirement.",
        "What are your strengths, and which areas are you actively improving?",
        f"Why are you a fit for a {experience_level} opportunity in this field?",
    ]

    coding_practice_links = [
        "https://leetcode.com/",
        "https://www.hackerrank.com/",
        "https://exercism.org/",
    ]

    preparation_tips = [
        "Review the top 5 required skills from the job descriptions and prepare one story for each.",
        "Practice explaining your projects in a concise problem-action-result format.",
        "Study the company, role expectations, and recent product or market updates before the interview.",
    ]

    return {
        "job_role": job_role.title(),
        "technical_questions": technical_questions[:8],
        "hr_questions": hr_questions,
        "coding_practice_links": coding_practice_links,
        "preparation_tips": preparation_tips,
    }
