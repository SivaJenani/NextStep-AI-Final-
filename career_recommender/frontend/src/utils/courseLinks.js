const COURSE_LINKS = {
  ai: {
    provider: "Google Cloud Skills Boost",
    url: "https://www.cloudskillsboost.google/",
    note: "Free learning paths and badges vary",
  },
  "generative ai": {
    provider: "Google Cloud Skills Boost",
    url: "https://www.cloudskillsboost.google/paths",
    note: "Free learning paths and badges vary",
  },
  api: {
    provider: "freeCodeCamp",
    url: "https://www.freecodecamp.org/learn/back-end-development-and-apis/",
    note: "Free certification",
  },
  "rest api": {
    provider: "freeCodeCamp",
    url: "https://www.freecodecamp.org/learn/back-end-development-and-apis/",
    note: "Free certification",
  },
  "rest api guided course": {
    provider: "freeCodeCamp",
    url: "https://www.freecodecamp.org/learn/back-end-development-and-apis/",
    note: "Free certification",
  },
  "fastapi or backend api path": {
    provider: "freeCodeCamp",
    url: "https://www.freecodecamp.org/learn/back-end-development-and-apis/",
    note: "Free certification",
  },
  backend: {
    provider: "freeCodeCamp",
    url: "https://www.freecodecamp.org/learn/back-end-development-and-apis/",
    note: "Free certification",
  },
  "backend developer": {
    provider: "freeCodeCamp",
    url: "https://www.freecodecamp.org/learn/back-end-development-and-apis/",
    note: "Free certification",
  },
  "back end development and apis certification (freecodecamp)": {
    provider: "freeCodeCamp",
    url: "https://www.freecodecamp.org/learn/back-end-development-and-apis/",
    note: "Free certification",
  },
  fastapi: {
    provider: "freeCodeCamp",
    url: "https://www.freecodecamp.org/learn/back-end-development-and-apis/",
    note: "Free certification",
  },
  python: {
    provider: "Kaggle",
    url: "https://www.kaggle.com/learn/python",
    note: "Free completion certificate",
  },
  sql: {
    provider: "Kaggle",
    url: "https://www.kaggle.com/learn/intro-to-sql",
    note: "Free completion certificate",
  },
  javascript: {
    provider: "freeCodeCamp",
    url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/",
    note: "Free certification",
  },
  javascripts: {
    provider: "freeCodeCamp",
    url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/",
    note: "Free certification",
  },
  react: {
    provider: "freeCodeCamp",
    url: "https://www.freecodecamp.org/learn/front-end-development-libraries/",
    note: "Free certification",
  },
  html: {
    provider: "freeCodeCamp",
    url: "https://www.freecodecamp.org/learn/responsive-web-design/",
    note: "Free certification",
  },
  css: {
    provider: "freeCodeCamp",
    url: "https://www.freecodecamp.org/learn/responsive-web-design/",
    note: "Free certification",
  },
  "tailwind css": {
    provider: "freeCodeCamp",
    url: "https://www.freecodecamp.org/news/tag/tailwindcss/",
    note: "Free tutorials",
  },
  github: {
    provider: "Microsoft Learn",
    url: "https://learn.microsoft.com/en-us/training/github/",
    note: "Trusted official training",
  },
  git: {
    provider: "Microsoft Learn",
    url: "https://learn.microsoft.com/en-us/training/github/",
    note: "Trusted official training",
  },
  aws: {
    provider: "AWS Skill Builder",
    url: "https://aws.amazon.com/training/digital/",
    note: "Free official training",
  },
  "amazon web services": {
    provider: "AWS Skill Builder",
    url: "https://aws.amazon.com/training/digital/",
    note: "600+ free digital courses",
  },
  cloud: {
    provider: "AWS Skill Builder",
    url: "https://aws.amazon.com/training/digital/",
    note: "600+ free digital courses",
  },
  "cloud computing": {
    provider: "AWS Skill Builder",
    url: "https://aws.amazon.com/training/digital/",
    note: "600+ free digital courses",
  },
  devops: {
    provider: "AWS Skill Builder",
    url: "https://aws.amazon.com/training/digital/",
    note: "Free official training",
  },
  azure: {
    provider: "Microsoft Learn",
    url: "https://learn.microsoft.com/en-us/training/azure/",
    note: "Free official training",
  },
  "google cloud": {
    provider: "Google Cloud Skills Boost",
    url: "https://www.cloudskillsboost.google/",
    note: "Free learning paths and badges vary",
  },
  docker: {
    provider: "IBM SkillsBuild",
    url: "https://skillsbuild.org/",
    note: "Free courses and credentials",
  },
  "problem solving": {
    provider: "NPTEL",
    url: "https://nptel.ac.in/courses",
    note: "University-level lecture courses",
  },
  fresher: {
    provider: "NPTEL",
    url: "https://nptel.ac.in/courses",
    note: "Foundational university lectures",
  },
  intern: {
    provider: "Udemy",
    url: "https://www.udemy.com/courses/search/?q=internship",
    note: "Practical skills for internships",
  },
  communication: {
    provider: "IBM SkillsBuild",
    url: "https://skillsbuild.org/",
    note: "Free courses and credentials",
  },
  "machine learning": {
    provider: "Google Cloud Skills Boost",
    url: "https://www.cloudskillsboost.google/paths",
    note: "Free learning paths and badges vary",
  },
  cybersecurity: {
    provider: "IBM SkillsBuild",
    url: "https://skillsbuild.org/",
    note: "Free courses and credentials",
  },
  security: {
    provider: "Microsoft Learn",
    url: "https://learn.microsoft.com/en-us/training/browse/?terms=security",
    note: "Free official training",
  },
  "scikit-learn": {
    provider: "scikit-learn",
    url: "https://scikit-learn.org/stable/getting_started.html",
    note: "Free official guide",
  },
  sklearn: {
    provider: "scikit-learn",
    url: "https://scikit-learn.org/stable/getting_started.html",
    note: "Free official guide",
  },
  ml: {
    provider: "Kaggle",
    url: "https://www.kaggle.com/learn/intro-to-machine-learning",
    note: "Free completion certificate",
  },
  "data analysis": {
    provider: "IBM SkillsBuild",
    url: "https://skillsbuild.org/",
    note: "Free courses and credentials",
  },
  tableau: {
    provider: "Tableau",
    url: "https://www.tableau.com/learn/training",
    note: "Free official training",
  },
  java: {
    provider: "freeCodeCamp",
    url: "https://www.freecodecamp.org/news/learn-java-free-java-courses-for-beginners/",
    note: "Free course guide",
  },
  "power bi": {
    provider: "Microsoft Learn",
    url: "https://learn.microsoft.com/en-us/training/powerplatform/power-bi/",
    note: "Free official training",
  },
  excel: {
    provider: "Microsoft Learn",
    url: "https://learn.microsoft.com/en-us/training/browse/?terms=excel",
    note: "Free official training",
  },
  "data visualization": {
    provider: "Microsoft Learn",
    url: "https://learn.microsoft.com/en-us/training/browse/?terms=data%20visualization",
    note: "Free official training",
  },
  pytorch: {
    provider: "PyTorch",
    url: "https://pytorch.org/tutorials/beginner/basics/intro.html",
    note: "Free official tutorial",
  },
  "node.js": {
    provider: "freeCodeCamp",
    url: "https://www.freecodecamp.org/learn/back-end-development-and-apis/",
    note: "Free certification",
  },
};

export const COMPANY_COURSE_PLATFORMS = [
  {
    provider: "Google Cloud Skills Boost",
    company: "Google",
    url: "https://www.cloudskillsboost.google/",
    bestFor: "AI, Google Cloud, data, ML",
    note: "Free learning paths; badges vary by lab/path",
  },
  {
    provider: "IBM SkillsBuild",
    company: "IBM",
    url: "https://skillsbuild.org/",
    bestFor: "Soft skills, cybersecurity, data, career readiness",
    note: "Free courses and digital credentials",
  },
  {
    provider: "Microsoft Learn",
    company: "Microsoft",
    url: "https://learn.microsoft.com/en-us/training/",
    bestFor: "Azure, GitHub, Power BI, security, developer tools",
    note: "Free official modules and learning paths",
  },
  {
    provider: "AWS Skill Builder",
    company: "Amazon/AWS",
    url: "https://aws.amazon.com/training/digital/",
    bestFor: "AWS, cloud, DevOps, solution architecture",
    note: "600+ free digital courses",
  },
];

const FALLBACK_LEARNING_PLATFORMS = [
  {
    provider: "NPTEL",
    url: "https://nptel.ac.in/courses",
    note: "University-level course catalog",
  },
  {
    provider: "SWAYAM",
    url: "https://swayam.gov.in/explorer",
    note: "Government-backed online courses",
  },
  {
    provider: "Coursera",
    url: "https://www.coursera.org/search?query={query}",
    note: "Professional course search",
  },
  {
    provider: "edX",
    url: "https://www.edx.org/search?q={query}",
    note: "University and industry courses",
  },
  {
    provider: "Udemy",
    url: "https://www.udemy.com/courses/search/?q={query}",
    note: "Practical project courses",
  },
  {
    provider: "LinkedIn Learning",
    url: "https://www.linkedin.com/learning/search?keywords={query}",
    note: "Career-focused course search",
  },
  {
    provider: "Pluralsight",
    url: "https://www.pluralsight.com/search?q={query}",
    note: "Technology skill paths",
  },
  {
    provider: "Udacity",
    url: "https://www.udacity.com/catalog?search={query}",
    note: "Career nanodegree catalog",
  },
  {
    provider: "freeCodeCamp",
    url: "https://www.freecodecamp.org/learn/",
    note: "Free certification paths",
  },
  {
    provider: "Codecademy",
    url: "https://www.codecademy.com/search?query={query}",
    note: "Interactive coding lessons",
  },
  {
    provider: "Khan Academy",
    url: "https://www.khanacademy.org/search?page_search_query={query}",
    note: "Beginner-friendly foundations",
  },
  {
    provider: "Google Digital Garage",
    url: "https://learndigital.withgoogle.com/digitalgarage",
    note: "Digital skills training",
  },
  {
    provider: "AWS Training & Certification",
    url: "https://aws.amazon.com/training/digital/",
    note: "Official AWS training",
  },
  {
    provider: "Microsoft Learn",
    url: "https://learn.microsoft.com/en-us/training/browse/?terms={query}",
    note: "Free official Microsoft modules",
  },
  {
    provider: "IBM SkillsBuild",
    url: "https://skillsbuild.org/",
    note: "Free courses and credentials",
  },
  {
    provider: "Simplilearn",
    url: "https://www.simplilearn.com/search?tag={query}",
    note: "Career certification courses",
  },
  {
    provider: "Scaler Academy",
    url: "https://www.scaler.com/topics/",
    note: "Software engineering topics",
  },
  {
    provider: "Great Learning",
    url: "https://www.mygreatlearning.com/academy/search?keyword={query}",
    note: "Free and guided courses",
  },
  {
    provider: "Skillshare",
    url: "https://www.skillshare.com/en/search?query={query}",
    note: "Creative and practical classes",
  },
  {
    provider: "FutureLearn",
    url: "https://www.futurelearn.com/search?q={query}",
    note: "University-backed short courses",
  },
  {
    provider: "Kaggle Learn",
    url: "https://www.kaggle.com/learn",
    note: "Free data science micro-courses",
  },
];

const FALLBACK_PLATFORM_RULES = [
  {
    keywords: ["frontend", "front end", "html", "css", "react", "javascript", "ui"],
    provider: "freeCodeCamp",
  },
  {
    keywords: ["python", "data", "machine learning", "analytics", "sql", "pandas", "kaggle"],
    provider: "Kaggle Learn",
  },
  {
    keywords: ["cloud", "aws", "devops", "deployment"],
    provider: "AWS Training & Certification",
  },
  {
    keywords: ["azure", "microsoft", "power bi", "excel", "github"],
    provider: "Microsoft Learn",
  },
  {
    keywords: ["career", "communication", "cybersecurity", "security", "soft skill"],
    provider: "IBM SkillsBuild",
  },
  {
    keywords: ["payments", "fintech", "finance", "product", "business"],
    provider: "Coursera",
  },
  {
    keywords: ["backend", "api", "java", "system design", "database"],
    provider: "Scaler Academy",
  },
];

function buildCourseTag(note) {
  const normalized = String(note || "").toLowerCase();
  const hasCredential =
    normalized.includes("certificate")
    || normalized.includes("certification")
    || normalized.includes("credential")
    || normalized.includes("badge");

  if (normalized.includes("free") && hasCredential) {
    return "Free certificate";
  }
  if (normalized.includes("free")) {
    return "Free course";
  }
  if (hasCredential) {
    return "Certificate path";
  }
  return "Learning source";
}

function buildFallbackCourse(skill) {
  const normalizedSkill = String(skill || "").trim().toLowerCase();
  if (!normalizedSkill) {
    return null;
  }
  const matchedRule = FALLBACK_PLATFORM_RULES.find((rule) =>
    rule.keywords.some((keyword) => normalizedSkill.includes(keyword)),
  );
  const platform =
    FALLBACK_LEARNING_PLATFORMS.find((item) => item.provider === matchedRule?.provider)
    || FALLBACK_LEARNING_PLATFORMS[
      Array.from(normalizedSkill).reduce((total, character) => total + character.charCodeAt(0), 0)
      % FALLBACK_LEARNING_PLATFORMS.length
    ];

  return {
    provider: platform.provider,
    url: platform.url.replace("{query}", encodeURIComponent(normalizedSkill)),
    note: platform.note,
  };
}

export function getCourseForSkill(skill) {
  if (!skill) return null;
  const normalizedSkill = String(skill).trim().toLowerCase();
  const course = COURSE_LINKS[normalizedSkill] || buildFallbackCourse(normalizedSkill);
  if (!course) return null;

  return {
    ...course,
    tag: buildCourseTag(course.note),
  };
}
