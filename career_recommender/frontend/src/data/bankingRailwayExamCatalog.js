// Normalized from the user-provided banking and railway datasets. Verify the latest notification before applying.
const BANKING_RAILWAY_EXAMS = [
  {
    "id": "ibps-po",
    "name": "IBPS Probationary Officer (PO)",
    "organization": "Institute of Banking Personnel Selection (IBPS)",
    "level": "Union Government",
    "state": "All India",
    "degrees": [
      "Any Graduate",
      "B.A",
      "B.Sc",
      "B.Com",
      "B.Tech"
    ],
    "selection": "exam_and_interview",
    "selectionProcess": "Preliminary, Mains, and Interview",
    "genders": [
      "all"
    ],
    "categories": [
      "all",
      "EWS",
      "OBC-NCL",
      "SC",
      "ST",
      "PwBD",
      "Ex-servicemen"
    ],
    "stages": [
      "Preliminary, Mains, and Interview"
    ],
    "category": "Banking",
    "officialUrl": "https://ibps.in",
    "applyUrl": "https://ibps.in",
    "minimumAge": 20,
    "maximumAge": 30,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "ibps-clerk",
    "name": "IBPS Clerk",
    "organization": "Institute of Banking Personnel Selection (IBPS)",
    "level": "Union Government",
    "state": "All India",
    "degrees": [
      "Any Graduate",
      "B.A",
      "B.Sc",
      "B.Com",
      "B.Tech"
    ],
    "selection": "exam_only",
    "selectionProcess": "Preliminary and Mains Examinations",
    "genders": [
      "all"
    ],
    "categories": [
      "all",
      "EWS",
      "OBC-NCL",
      "SC",
      "ST",
      "PwBD",
      "Ex-servicemen"
    ],
    "stages": [
      "Preliminary and Mains Examinations"
    ],
    "category": "Banking",
    "officialUrl": "https://ibps.in",
    "applyUrl": "https://ibps.in",
    "minimumAge": 20,
    "maximumAge": 28,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "ibps-so",
    "name": "IBPS Specialist Officer (SO)",
    "organization": "Institute of Banking Personnel Selection (IBPS)",
    "level": "Union Government",
    "state": "All India",
    "degrees": [
      "Any Graduate",
      "B.A",
      "B.Sc",
      "B.Com",
      "B.Tech"
    ],
    "selection": "exam_and_interview",
    "selectionProcess": "Preliminary, Mains, and Interview",
    "genders": [
      "all"
    ],
    "categories": [
      "all",
      "EWS",
      "OBC-NCL",
      "SC",
      "ST",
      "PwBD",
      "Ex-servicemen"
    ],
    "stages": [
      "Preliminary, Mains, and Interview"
    ],
    "category": "Banking",
    "officialUrl": "https://ibps.in",
    "applyUrl": "https://ibps.in",
    "minimumAge": 20,
    "maximumAge": 30,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "ibps-rrb-po",
    "name": "IBPS RRB Officer Scale I (PO)",
    "organization": "Institute of Banking Personnel Selection (IBPS)",
    "level": "Union Government",
    "state": "All India",
    "degrees": [
      "Any Graduate",
      "B.A",
      "B.Sc",
      "B.Com",
      "B.Tech"
    ],
    "selection": "exam_and_interview",
    "selectionProcess": "Preliminary, Mains, and Interview",
    "genders": [
      "all"
    ],
    "categories": [
      "all",
      "EWS",
      "OBC-NCL",
      "SC",
      "ST",
      "PwBD",
      "Ex-servicemen"
    ],
    "stages": [
      "Preliminary, Mains, and Interview"
    ],
    "category": "Banking",
    "officialUrl": "https://ibps.in",
    "applyUrl": "https://ibps.in",
    "minimumAge": 18,
    "maximumAge": 30,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "ibps-rrb-clerk",
    "name": "IBPS RRB Office Assistant (Clerk)",
    "organization": "Institute of Banking Personnel Selection (IBPS)",
    "level": "Union Government",
    "state": "All India",
    "degrees": [
      "Any Graduate",
      "B.A",
      "B.Sc",
      "B.Com",
      "B.Tech"
    ],
    "selection": "exam_only",
    "selectionProcess": "Preliminary and Mains Examinations",
    "genders": [
      "all"
    ],
    "categories": [
      "all",
      "EWS",
      "OBC-NCL",
      "SC",
      "ST",
      "PwBD",
      "Ex-servicemen"
    ],
    "stages": [
      "Preliminary and Mains Examinations"
    ],
    "category": "Banking",
    "officialUrl": "https://ibps.in",
    "applyUrl": "https://ibps.in",
    "minimumAge": 18,
    "maximumAge": 30,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "ibps-rrb-scale-ii",
    "name": "IBPS RRB Officer Scale II (Specialist Officer)",
    "organization": "Institute of Banking Personnel Selection (IBPS)",
    "level": "Union Government",
    "state": "All India",
    "degrees": [
      "Any Graduate",
      "B.A",
      "B.Sc",
      "B.Com",
      "B.Tech"
    ],
    "selection": "exam_and_interview",
    "selectionProcess": "Single Online Examination and Interview",
    "genders": [
      "all"
    ],
    "categories": [
      "all",
      "EWS",
      "OBC-NCL",
      "SC",
      "ST",
      "PwBD",
      "Ex-servicemen"
    ],
    "stages": [
      "Single Online Examination and Interview"
    ],
    "category": "Banking",
    "officialUrl": "https://ibps.in",
    "applyUrl": "https://ibps.in",
    "minimumAge": 21,
    "maximumAge": 32,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Age varies by specialist post and experience."
  },
  {
    "id": "ibps-rrb-scale-iii",
    "name": "IBPS RRB Officer Scale III (Senior Manager)",
    "organization": "Institute of Banking Personnel Selection (IBPS)",
    "level": "Union Government",
    "state": "All India",
    "degrees": [
      "Any Graduate",
      "B.A",
      "B.Sc",
      "B.Com",
      "B.Tech"
    ],
    "selection": "exam_and_interview",
    "selectionProcess": "Single Online Examination and Interview",
    "genders": [
      "all"
    ],
    "categories": [
      "all",
      "EWS",
      "OBC-NCL",
      "SC",
      "ST",
      "PwBD",
      "Ex-servicemen"
    ],
    "stages": [
      "Single Online Examination and Interview"
    ],
    "category": "Banking",
    "officialUrl": "https://ibps.in",
    "applyUrl": "https://ibps.in",
    "minimumAge": 21,
    "maximumAge": 40,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "sbi-po",
    "name": "SBI Probationary Officer (PO)",
    "organization": "State Bank of India (SBI)",
    "level": "Union Government",
    "state": "All India",
    "degrees": [
      "Any Graduate",
      "B.A",
      "B.Sc",
      "B.Com",
      "B.Tech"
    ],
    "selection": "exam_and_interview",
    "selectionProcess": "Preliminary, Mains, Psychometric Test, and Interview",
    "genders": [
      "all"
    ],
    "categories": [
      "all",
      "EWS",
      "OBC-NCL",
      "SC",
      "ST",
      "PwBD",
      "Ex-servicemen"
    ],
    "stages": [
      "Preliminary, Mains, Psychometric Test, and Interview"
    ],
    "category": "Banking",
    "officialUrl": "https://sbi.co.in",
    "applyUrl": "https://sbi.co.in",
    "minimumAge": 21,
    "maximumAge": 30,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "sbi-clerk",
    "name": "SBI Clerk (Junior Associate)",
    "organization": "State Bank of India (SBI)",
    "level": "Union Government",
    "state": "All India",
    "degrees": [
      "Any Graduate",
      "B.A",
      "B.Sc",
      "B.Com",
      "B.Tech"
    ],
    "selection": "exam_only",
    "selectionProcess": "Preliminary and Mains Examinations",
    "genders": [
      "all"
    ],
    "categories": [
      "all",
      "EWS",
      "OBC-NCL",
      "SC",
      "ST",
      "PwBD",
      "Ex-servicemen"
    ],
    "stages": [
      "Preliminary and Mains Examinations"
    ],
    "category": "Banking",
    "officialUrl": "https://sbi.co.in",
    "applyUrl": "https://sbi.co.in",
    "minimumAge": 20,
    "maximumAge": 28,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "sbi-so",
    "name": "SBI Specialist Officer (SO)",
    "organization": "State Bank of India (SBI)",
    "level": "Union Government",
    "state": "All India",
    "degrees": [
      "Any Graduate",
      "B.A",
      "B.Sc",
      "B.Com",
      "B.Tech"
    ],
    "selection": "exam_and_interview",
    "selectionProcess": "Online Test / Interview as notified",
    "genders": [
      "all"
    ],
    "categories": [
      "all",
      "EWS",
      "OBC-NCL",
      "SC",
      "ST",
      "PwBD",
      "Ex-servicemen"
    ],
    "stages": [
      "Online Test / Interview as notified"
    ],
    "category": "Banking",
    "officialUrl": "https://sbi.co.in",
    "applyUrl": "https://sbi.co.in",
    "minimumAge": null,
    "maximumAge": null,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Age varies significantly by specialist post."
  },
  {
    "id": "sbi-apprentice",
    "name": "SBI Apprentice",
    "organization": "State Bank of India (SBI)",
    "level": "Union Government",
    "state": "All India",
    "degrees": [
      "10+2 / Equivalent"
    ],
    "selection": "exam_only",
    "selectionProcess": "Online Written Test and Local Language Test",
    "genders": [
      "all"
    ],
    "categories": [
      "all",
      "EWS",
      "OBC-NCL",
      "SC",
      "ST",
      "PwBD",
      "Ex-servicemen"
    ],
    "stages": [
      "Online Written Test and Local Language Test"
    ],
    "category": "Banking",
    "officialUrl": "https://sbi.co.in",
    "applyUrl": "https://sbi.co.in",
    "minimumAge": 20,
    "maximumAge": 28,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "rbi-grade-b",
    "name": "RBI Grade B Officer",
    "organization": "Reserve Bank of India (RBI)",
    "level": "Union Government",
    "state": "All India",
    "degrees": [
      "Any Graduate",
      "B.A",
      "B.Sc",
      "B.Com",
      "B.Tech"
    ],
    "selection": "exam_and_interview",
    "selectionProcess": "Phase-I, Phase-II Exams, and Interview",
    "genders": [
      "all"
    ],
    "categories": [
      "all",
      "EWS",
      "OBC-NCL",
      "SC",
      "ST",
      "PwBD",
      "Ex-servicemen"
    ],
    "stages": [
      "Phase-I, Phase-II Exams, and Interview"
    ],
    "category": "Banking / Regulatory Bodies",
    "officialUrl": "https://rbi.org.in",
    "applyUrl": "https://rbi.org.in",
    "minimumAge": 21,
    "maximumAge": 30,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "rbi-assistant",
    "name": "RBI Assistant",
    "organization": "Reserve Bank of India (RBI)",
    "level": "Union Government",
    "state": "All India",
    "degrees": [
      "Any Graduate",
      "B.A",
      "B.Sc",
      "B.Com",
      "B.Tech"
    ],
    "selection": "exam_only",
    "selectionProcess": "Preliminary and Mains Examinations, Language Proficiency Test",
    "genders": [
      "all"
    ],
    "categories": [
      "all",
      "EWS",
      "OBC-NCL",
      "SC",
      "ST",
      "PwBD",
      "Ex-servicemen"
    ],
    "stages": [
      "Preliminary and Mains Examinations, Language Proficiency Test"
    ],
    "category": "Banking",
    "officialUrl": "https://rbi.org.in",
    "applyUrl": "https://rbi.org.in",
    "minimumAge": 20,
    "maximumAge": 28,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "nabard-grade-a",
    "name": "NABARD Grade A Officer",
    "organization": "National Bank for Agriculture and Rural Development",
    "level": "Union Government",
    "state": "All India",
    "degrees": [
      "Any Graduate",
      "B.A",
      "B.Sc",
      "B.Com",
      "B.Tech"
    ],
    "selection": "exam_and_interview",
    "selectionProcess": "Preliminary, Mains, and Interview",
    "genders": [
      "all"
    ],
    "categories": [
      "all",
      "EWS",
      "OBC-NCL",
      "SC",
      "ST",
      "PwBD",
      "Ex-servicemen"
    ],
    "stages": [
      "Preliminary, Mains, and Interview"
    ],
    "category": "Banking / Regulatory Bodies",
    "officialUrl": "https://www.nabard.org",
    "applyUrl": "https://www.nabard.org",
    "minimumAge": 21,
    "maximumAge": 30,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "nabard-grade-b",
    "name": "NABARD Grade B Officer",
    "organization": "National Bank for Agriculture and Rural Development",
    "level": "Union Government",
    "state": "All India",
    "degrees": [
      "Any Graduate",
      "B.A",
      "B.Sc",
      "B.Com",
      "B.Tech"
    ],
    "selection": "exam_and_interview",
    "selectionProcess": "Preliminary, Mains, and Interview",
    "genders": [
      "all"
    ],
    "categories": [
      "all",
      "EWS",
      "OBC-NCL",
      "SC",
      "ST",
      "PwBD",
      "Ex-servicemen"
    ],
    "stages": [
      "Preliminary, Mains, and Interview"
    ],
    "category": "Banking / Regulatory Bodies",
    "officialUrl": "https://www.nabard.org",
    "applyUrl": "https://www.nabard.org",
    "minimumAge": 21,
    "maximumAge": 35,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "sidbi-grade-a",
    "name": "SIDBI Grade A Assistant Manager",
    "organization": "Small Industries Development Bank of India",
    "level": "Union Government",
    "state": "All India",
    "degrees": [
      "Any Graduate",
      "B.A",
      "B.Sc",
      "B.Com",
      "B.Tech"
    ],
    "selection": "exam_and_interview",
    "selectionProcess": "Online Examination and Interview",
    "genders": [
      "all"
    ],
    "categories": [
      "all",
      "EWS",
      "OBC-NCL",
      "SC",
      "ST",
      "PwBD",
      "Ex-servicemen"
    ],
    "stages": [
      "Online Examination and Interview"
    ],
    "category": "Banking / Development Finance",
    "officialUrl": "https://www.sidbi.in",
    "applyUrl": "https://www.sidbi.in",
    "minimumAge": 21,
    "maximumAge": 30,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "sidbi-grade-b",
    "name": "SIDBI Grade B Manager",
    "organization": "Small Industries Development Bank of India",
    "level": "Union Government",
    "state": "All India",
    "degrees": [
      "Any Graduate",
      "B.A",
      "B.Sc",
      "B.Com",
      "B.Tech"
    ],
    "selection": "exam_and_interview",
    "selectionProcess": "Online Examination and Interview",
    "genders": [
      "all"
    ],
    "categories": [
      "all",
      "EWS",
      "OBC-NCL",
      "SC",
      "ST",
      "PwBD",
      "Ex-servicemen"
    ],
    "stages": [
      "Online Examination and Interview"
    ],
    "category": "Banking / Development Finance",
    "officialUrl": "https://www.sidbi.in",
    "applyUrl": "https://www.sidbi.in",
    "minimumAge": 21,
    "maximumAge": 35,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "sebi-grade-a",
    "name": "SEBI Grade A Officer",
    "organization": "Securities and Exchange Board of India",
    "level": "Union Government",
    "state": "All India",
    "degrees": [
      "Any Graduate",
      "B.A",
      "B.Sc",
      "B.Com",
      "B.Tech"
    ],
    "selection": "exam_and_interview",
    "selectionProcess": "Phase I, Phase II, and Interview",
    "genders": [
      "all"
    ],
    "categories": [
      "all",
      "EWS",
      "OBC-NCL",
      "SC",
      "ST",
      "PwBD",
      "Ex-servicemen"
    ],
    "stages": [
      "Phase I, Phase II, and Interview"
    ],
    "category": "Banking / Regulatory Bodies",
    "officialUrl": "https://www.sebi.gov.in",
    "applyUrl": "https://www.sebi.gov.in",
    "minimumAge": 21,
    "maximumAge": 30,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "nabard-development-assistant",
    "name": "NABARD Development Assistant",
    "organization": "National Bank for Agriculture and Rural Development",
    "level": "Union Government",
    "state": "All India",
    "degrees": [
      "Any Graduate",
      "B.A",
      "B.Sc",
      "B.Com",
      "B.Tech"
    ],
    "selection": "exam_only",
    "selectionProcess": "Preliminary and Mains Examinations",
    "genders": [
      "all"
    ],
    "categories": [
      "all",
      "EWS",
      "OBC-NCL",
      "SC",
      "ST",
      "PwBD",
      "Ex-servicemen"
    ],
    "stages": [
      "Preliminary and Mains Examinations"
    ],
    "category": "Banking",
    "officialUrl": "https://www.nabard.org",
    "applyUrl": "https://www.nabard.org",
    "minimumAge": 18,
    "maximumAge": 30,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "rbi-office-attendant",
    "name": "RBI Office Attendant",
    "organization": "Reserve Bank of India (RBI)",
    "level": "Union Government",
    "state": "All India",
    "degrees": [
      "10th Pass"
    ],
    "selection": "exam_only",
    "selectionProcess": "Online Test and Language Proficiency Test",
    "genders": [
      "all"
    ],
    "categories": [
      "all",
      "EWS",
      "OBC-NCL",
      "SC",
      "ST",
      "PwBD",
      "Ex-servicemen"
    ],
    "stages": [
      "Online Test and Language Proficiency Test"
    ],
    "category": "Banking",
    "officialUrl": "https://rbi.org.in",
    "applyUrl": "https://rbi.org.in",
    "minimumAge": 18,
    "maximumAge": 25,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "lic-aao",
    "name": "LIC Assistant Administrative Officer (AAO)",
    "organization": "Life Insurance Corporation of India",
    "level": "Union Government",
    "state": "All India",
    "degrees": [
      "Any Graduate",
      "B.A",
      "B.Sc",
      "B.Com",
      "B.Tech"
    ],
    "selection": "exam_and_interview",
    "selectionProcess": "Preliminary, Mains, and Interview",
    "genders": [
      "all"
    ],
    "categories": [
      "all",
      "EWS",
      "OBC-NCL",
      "SC",
      "ST",
      "PwBD",
      "Ex-servicemen"
    ],
    "stages": [
      "Preliminary, Mains, and Interview"
    ],
    "category": "Insurance / Financial Services",
    "officialUrl": "https://licindia.in",
    "applyUrl": "https://licindia.in",
    "minimumAge": 21,
    "maximumAge": 30,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "lic-ado",
    "name": "LIC Apprentice Development Officer (ADO)",
    "organization": "Life Insurance Corporation of India",
    "level": "Union Government",
    "state": "All India",
    "degrees": [
      "Any Graduate",
      "B.A",
      "B.Sc",
      "B.Com",
      "B.Tech"
    ],
    "selection": "exam_and_interview",
    "selectionProcess": "Preliminary, Mains, and Interview",
    "genders": [
      "all"
    ],
    "categories": [
      "all",
      "EWS",
      "OBC-NCL",
      "SC",
      "ST",
      "PwBD",
      "Ex-servicemen"
    ],
    "stages": [
      "Preliminary, Mains, and Interview"
    ],
    "category": "Insurance / Financial Services",
    "officialUrl": "https://licindia.in",
    "applyUrl": "https://licindia.in",
    "minimumAge": 21,
    "maximumAge": 30,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "lic-assistant",
    "name": "LIC Assistant",
    "organization": "Life Insurance Corporation of India",
    "level": "Union Government",
    "state": "All India",
    "degrees": [
      "10+2 / Equivalent"
    ],
    "selection": "exam_only",
    "selectionProcess": "Preliminary, Mains, and Language Proficiency Test",
    "genders": [
      "all"
    ],
    "categories": [
      "all",
      "EWS",
      "OBC-NCL",
      "SC",
      "ST",
      "PwBD",
      "Ex-servicemen"
    ],
    "stages": [
      "Preliminary, Mains, and Language Proficiency Test"
    ],
    "category": "Insurance / Financial Services",
    "officialUrl": "https://licindia.in",
    "applyUrl": "https://licindia.in",
    "minimumAge": 18,
    "maximumAge": 30,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "nicl-ao",
    "name": "National Insurance Company Administrative Officer (AO)",
    "organization": "National Insurance Company Limited",
    "level": "Union Government",
    "state": "All India",
    "degrees": [
      "Any Graduate",
      "B.A",
      "B.Sc",
      "B.Com",
      "B.Tech"
    ],
    "selection": "exam_and_interview",
    "selectionProcess": "Preliminary, Mains, and Interview",
    "genders": [
      "all"
    ],
    "categories": [
      "all",
      "EWS",
      "OBC-NCL",
      "SC",
      "ST",
      "PwBD",
      "Ex-servicemen"
    ],
    "stages": [
      "Preliminary, Mains, and Interview"
    ],
    "category": "Insurance / Financial Services",
    "officialUrl": "https://nationalinsurance.nic.co.in",
    "applyUrl": "https://nationalinsurance.nic.co.in",
    "minimumAge": 21,
    "maximumAge": 30,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "nicl-assistant",
    "name": "National Insurance Company Assistant",
    "organization": "National Insurance Company Limited",
    "level": "Union Government",
    "state": "All India",
    "degrees": [
      "10+2 / Equivalent"
    ],
    "selection": "exam_only",
    "selectionProcess": "Preliminary, Mains, and Regional Language Test",
    "genders": [
      "all"
    ],
    "categories": [
      "all",
      "EWS",
      "OBC-NCL",
      "SC",
      "ST",
      "PwBD",
      "Ex-servicemen"
    ],
    "stages": [
      "Preliminary, Mains, and Regional Language Test"
    ],
    "category": "Insurance / Financial Services",
    "officialUrl": "https://nationalinsurance.nic.co.in",
    "applyUrl": "https://nationalinsurance.nic.co.in",
    "minimumAge": 18,
    "maximumAge": 30,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "uiicl-ao",
    "name": "United India Insurance Administrative Officer (AO)",
    "organization": "United India Insurance Company Limited",
    "level": "Union Government",
    "state": "All India",
    "degrees": [
      "Any Graduate",
      "B.A",
      "B.Sc",
      "B.Com",
      "B.Tech"
    ],
    "selection": "exam_and_interview",
    "selectionProcess": "Preliminary, Mains, and Interview",
    "genders": [
      "all"
    ],
    "categories": [
      "all",
      "EWS",
      "OBC-NCL",
      "SC",
      "ST",
      "PwBD",
      "Ex-servicemen"
    ],
    "stages": [
      "Preliminary, Mains, and Interview"
    ],
    "category": "Insurance / Financial Services",
    "officialUrl": "https://uiic.co.in",
    "applyUrl": "https://uiic.co.in",
    "minimumAge": 21,
    "maximumAge": 30,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "oriental-insurance-ao",
    "name": "Oriental Insurance Administrative Officer (AO)",
    "organization": "Oriental Insurance Company Limited",
    "level": "Union Government",
    "state": "All India",
    "degrees": [
      "Any Graduate",
      "B.A",
      "B.Sc",
      "B.Com",
      "B.Tech"
    ],
    "selection": "exam_and_interview",
    "selectionProcess": "Preliminary, Mains, and Interview",
    "genders": [
      "all"
    ],
    "categories": [
      "all",
      "EWS",
      "OBC-NCL",
      "SC",
      "ST",
      "PwBD",
      "Ex-servicemen"
    ],
    "stages": [
      "Preliminary, Mains, and Interview"
    ],
    "category": "Insurance / Financial Services",
    "officialUrl": "https://orientalinsurance.org.in",
    "applyUrl": "https://orientalinsurance.org.in",
    "minimumAge": 21,
    "maximumAge": 30,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "niacl-assistant",
    "name": "New India Assurance Company Assistant",
    "organization": "New India Assurance Company Limited",
    "level": "Union Government",
    "state": "All India",
    "degrees": [
      "10+2 / Equivalent"
    ],
    "selection": "exam_only",
    "selectionProcess": "Preliminary, Mains, and Regional Language Test",
    "genders": [
      "all"
    ],
    "categories": [
      "all",
      "EWS",
      "OBC-NCL",
      "SC",
      "ST",
      "PwBD",
      "Ex-servicemen"
    ],
    "stages": [
      "Preliminary, Mains, and Regional Language Test"
    ],
    "category": "Insurance / Financial Services",
    "officialUrl": "https://www.newindia.co.in",
    "applyUrl": "https://www.newindia.co.in",
    "minimumAge": 18,
    "maximumAge": 30,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "nabard-office-attendant",
    "name": "NABARD Office Attendant",
    "organization": "National Bank for Agriculture and Rural Development",
    "level": "Union Government",
    "state": "All India",
    "degrees": [
      "10th Pass"
    ],
    "selection": "exam_only",
    "selectionProcess": "Online Test and Language Proficiency Test",
    "genders": [
      "all"
    ],
    "categories": [
      "all",
      "EWS",
      "OBC-NCL",
      "SC",
      "ST",
      "PwBD",
      "Ex-servicemen"
    ],
    "stages": [
      "Online Test and Language Proficiency Test"
    ],
    "category": "Banking",
    "officialUrl": "https://www.nabard.org",
    "applyUrl": "https://www.nabard.org",
    "minimumAge": 18,
    "maximumAge": 30,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "sbi-circle-based-officer",
    "name": "SBI Circle Based Officer (CBO)",
    "organization": "State Bank of India (SBI)",
    "level": "Union Government",
    "state": "All India",
    "degrees": [
      "Any Graduate",
      "B.A",
      "B.Sc",
      "B.Com",
      "B.Tech"
    ],
    "selection": "exam_and_interview",
    "selectionProcess": "Online Test, Screening, and Interview",
    "genders": [
      "all"
    ],
    "categories": [
      "all",
      "EWS",
      "OBC-NCL",
      "SC",
      "ST",
      "PwBD",
      "Ex-servicemen"
    ],
    "stages": [
      "Online Test, Screening, and Interview"
    ],
    "category": "Banking",
    "officialUrl": "https://sbi.co.in",
    "applyUrl": "https://sbi.co.in",
    "minimumAge": 21,
    "maximumAge": 30,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "ibps-bank-internal-promotion",
    "name": "IBPS Internal Promotion Examination",
    "organization": "Participating Banks / IBPS",
    "level": "Union Government",
    "state": "All India",
    "degrees": [
      "Existing Bank Employees"
    ],
    "selection": "exam_and_interview",
    "selectionProcess": "Online Examination / Interview as notified",
    "genders": [
      "all"
    ],
    "categories": [
      "all",
      "EWS",
      "OBC-NCL",
      "SC",
      "ST",
      "PwBD",
      "Ex-servicemen"
    ],
    "stages": [
      "Online Examination / Interview as notified"
    ],
    "category": "Banking",
    "officialUrl": "https://ibps.in",
    "applyUrl": "https://ibps.in",
    "minimumAge": null,
    "maximumAge": null,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Eligibility depends on bank service and internal promotion rules."
  },
  {
    "id": "rrb-ntpc-grad",
    "name": "RRB Non-Technical Popular Categories (NTPC) Graduate",
    "organization": "Railway Recruitment Boards (RRB)",
    "level": "Union Government",
    "state": "All India",
    "degrees": [
      "Any Graduate",
      "B.A",
      "B.Sc",
      "B.Com",
      "B.Tech"
    ],
    "selection": "exam_only",
    "selectionProcess": "CBT 1, CBT 2, Typing Skill Test / Computer Based Aptitude Test, and Document Verification",
    "genders": [
      "all"
    ],
    "categories": [
      "all",
      "EWS",
      "OBC-NCL",
      "SC",
      "ST",
      "PwBD",
      "Ex-servicemen"
    ],
    "stages": [
      "CBT 1, CBT 2, Typing Skill Test / Computer Based Aptitude Test, and Document Verification"
    ],
    "category": "Railways",
    "officialUrl": "https://indianrailways.gov.in",
    "applyUrl": "https://indianrailways.gov.in",
    "minimumAge": 18,
    "maximumAge": 33,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10,
      "ExServicemen": 3
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "rrb-ntpc-under-grad",
    "name": "RRB Non-Technical Popular Categories (NTPC) Under Graduate",
    "organization": "Railway Recruitment Boards (RRB)",
    "level": "Union Government",
    "state": "All India",
    "degrees": [
      "10+2 / Equivalent"
    ],
    "selection": "exam_only",
    "selectionProcess": "CBT 1, CBT 2, Typing Skill Test / Computer Based Aptitude Test, and Document Verification",
    "genders": [
      "all"
    ],
    "categories": [
      "all",
      "EWS",
      "OBC-NCL",
      "SC",
      "ST",
      "PwBD",
      "Ex-servicemen"
    ],
    "stages": [
      "CBT 1, CBT 2, Typing Skill Test / Computer Based Aptitude Test, and Document Verification"
    ],
    "category": "Railways",
    "officialUrl": "https://indianrailways.gov.in",
    "applyUrl": "https://indianrailways.gov.in",
    "minimumAge": 18,
    "maximumAge": 30,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10,
      "ExServicemen": 3
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "rrb-group-d",
    "name": "RRB Group D (Level 1) Recruitment",
    "organization": "Railway Recruitment Boards (RRB)",
    "level": "Union Government",
    "state": "All India",
    "degrees": [
      "10th Pass",
      "ITI"
    ],
    "selection": "exam_only",
    "selectionProcess": "Computer Based Test, Physical Efficiency Test, and Document Verification",
    "genders": [
      "all"
    ],
    "categories": [
      "all",
      "EWS",
      "OBC-NCL",
      "SC",
      "ST",
      "PwBD",
      "Ex-servicemen"
    ],
    "stages": [
      "Computer Based Test, Physical Efficiency Test, and Document Verification"
    ],
    "category": "Railways",
    "officialUrl": "https://indianrailways.gov.in",
    "applyUrl": "https://indianrailways.gov.in",
    "minimumAge": 18,
    "maximumAge": 33,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10,
      "ExServicemen": 3
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "rrb-alp",
    "name": "RRB Assistant Loco Pilot (ALP)",
    "organization": "Railway Recruitment Boards (RRB)",
    "level": "Union Government",
    "state": "All India",
    "degrees": [
      "10th Pass",
      "ITI",
      "Diploma"
    ],
    "selection": "exam_only",
    "selectionProcess": "CBT 1, CBT 2, Computer Based Aptitude Test, and Document Verification",
    "genders": [
      "all"
    ],
    "categories": [
      "all",
      "EWS",
      "OBC-NCL",
      "SC",
      "ST",
      "PwBD",
      "Ex-servicemen"
    ],
    "stages": [
      "CBT 1, CBT 2, Computer Based Aptitude Test, and Document Verification"
    ],
    "category": "Railways",
    "officialUrl": "https://indianrailways.gov.in",
    "applyUrl": "https://indianrailways.gov.in",
    "minimumAge": 18,
    "maximumAge": 30,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10,
      "ExServicemen": 3
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "rrb-technician-grade-1",
    "name": "RRB Technician Grade I Signal",
    "organization": "Railway Recruitment Boards (RRB)",
    "level": "Union Government",
    "state": "All India",
    "degrees": [
      "Diploma",
      "B.Tech",
      "B.E"
    ],
    "selection": "exam_only",
    "selectionProcess": "Computer Based Test and Document Verification",
    "genders": [
      "all"
    ],
    "categories": [
      "all",
      "EWS",
      "OBC-NCL",
      "SC",
      "ST",
      "PwBD",
      "Ex-servicemen"
    ],
    "stages": [
      "Computer Based Test and Document Verification"
    ],
    "category": "Railways",
    "officialUrl": "https://indianrailways.gov.in",
    "applyUrl": "https://indianrailways.gov.in",
    "minimumAge": 18,
    "maximumAge": 33,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10,
      "ExServicemen": 3
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "rrb-technician-grade-3",
    "name": "RRB Technician Grade III",
    "organization": "Railway Recruitment Boards (RRB)",
    "level": "Union Government",
    "state": "All India",
    "degrees": [
      "10th Pass",
      "ITI"
    ],
    "selection": "exam_only",
    "selectionProcess": "Computer Based Test and Document Verification",
    "genders": [
      "all"
    ],
    "categories": [
      "all",
      "EWS",
      "OBC-NCL",
      "SC",
      "ST",
      "PwBD",
      "Ex-servicemen"
    ],
    "stages": [
      "Computer Based Test and Document Verification"
    ],
    "category": "Railways",
    "officialUrl": "https://indianrailways.gov.in",
    "applyUrl": "https://indianrailways.gov.in",
    "minimumAge": 18,
    "maximumAge": 33,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10,
      "ExServicemen": 3
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "rrb-je",
    "name": "RRB Junior Engineer (JE)",
    "organization": "Railway Recruitment Boards (RRB)",
    "level": "Union Government",
    "state": "All India",
    "degrees": [
      "Diploma",
      "B.Tech",
      "B.E"
    ],
    "selection": "exam_only",
    "selectionProcess": "CBT 1, CBT 2, and Document Verification",
    "genders": [
      "all"
    ],
    "categories": [
      "all",
      "EWS",
      "OBC-NCL",
      "SC",
      "ST",
      "PwBD",
      "Ex-servicemen"
    ],
    "stages": [
      "CBT 1, CBT 2, and Document Verification"
    ],
    "category": "Railways",
    "officialUrl": "https://indianrailways.gov.in",
    "applyUrl": "https://indianrailways.gov.in",
    "minimumAge": 18,
    "maximumAge": 33,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10,
      "ExServicemen": 3
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "rrb-dms",
    "name": "RRB Depot Material Superintendent (DMS)",
    "organization": "Railway Recruitment Boards (RRB)",
    "level": "Union Government",
    "state": "All India",
    "degrees": [
      "Diploma",
      "B.Tech",
      "B.E"
    ],
    "selection": "exam_only",
    "selectionProcess": "CBT 1, CBT 2, and Document Verification",
    "genders": [
      "all"
    ],
    "categories": [
      "all",
      "EWS",
      "OBC-NCL",
      "SC",
      "ST",
      "PwBD",
      "Ex-servicemen"
    ],
    "stages": [
      "CBT 1, CBT 2, and Document Verification"
    ],
    "category": "Railways",
    "officialUrl": "https://indianrailways.gov.in",
    "applyUrl": "https://indianrailways.gov.in",
    "minimumAge": 18,
    "maximumAge": 33,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10,
      "ExServicemen": 3
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "rrb-cma",
    "name": "RRB Chemical and Metallurgical Assistant (CMA)",
    "organization": "Railway Recruitment Boards (RRB)",
    "level": "Union Government",
    "state": "All India",
    "degrees": [
      "B.Sc",
      "Diploma"
    ],
    "selection": "exam_only",
    "selectionProcess": "CBT 1, CBT 2, and Document Verification",
    "genders": [
      "all"
    ],
    "categories": [
      "all",
      "EWS",
      "OBC-NCL",
      "SC",
      "ST",
      "PwBD",
      "Ex-servicemen"
    ],
    "stages": [
      "CBT 1, CBT 2, and Document Verification"
    ],
    "category": "Railways",
    "officialUrl": "https://indianrailways.gov.in",
    "applyUrl": "https://indianrailways.gov.in",
    "minimumAge": 18,
    "maximumAge": 33,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10,
      "ExServicemen": 3
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "rrb-je-it",
    "name": "RRB Junior Engineer Information Technology (JE IT)",
    "organization": "Railway Recruitment Boards (RRB)",
    "level": "Union Government",
    "state": "All India",
    "degrees": [
      "B.Tech",
      "B.E",
      "BCA",
      "B.Sc Computer Science"
    ],
    "selection": "exam_only",
    "selectionProcess": "CBT 1, CBT 2, and Document Verification",
    "genders": [
      "all"
    ],
    "categories": [
      "all",
      "EWS",
      "OBC-NCL",
      "SC",
      "ST",
      "PwBD",
      "Ex-servicemen"
    ],
    "stages": [
      "CBT 1, CBT 2, and Document Verification"
    ],
    "category": "Railways",
    "officialUrl": "https://indianrailways.gov.in",
    "applyUrl": "https://indianrailways.gov.in",
    "minimumAge": 18,
    "maximumAge": 33,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10,
      "ExServicemen": 3
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "rrb-paramedical",
    "name": "RRB Paramedical Recruitment",
    "organization": "Railway Recruitment Boards (RRB)",
    "level": "Union Government",
    "state": "All India",
    "degrees": [
      "Diploma",
      "B.Sc",
      "Any Graduate"
    ],
    "selection": "exam_only",
    "selectionProcess": "Computer Based Test and Document Verification",
    "genders": [
      "all"
    ],
    "categories": [
      "all",
      "EWS",
      "OBC-NCL",
      "SC",
      "ST",
      "PwBD",
      "Ex-servicemen"
    ],
    "stages": [
      "Computer Based Test and Document Verification"
    ],
    "category": "Railways",
    "officialUrl": "https://indianrailways.gov.in",
    "applyUrl": "https://indianrailways.gov.in",
    "minimumAge": 18,
    "maximumAge": 33,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10,
      "ExServicemen": 3
    },
    "ageNote": "Age varies by paramedical post."
  },
  {
    "id": "rrb-ministerial",
    "name": "RRB Ministerial and Isolated Categories Recruitment",
    "organization": "Railway Recruitment Boards (RRB)",
    "level": "Union Government",
    "state": "All India",
    "degrees": [
      "12th Pass",
      "Any Graduate"
    ],
    "selection": "exam_only",
    "selectionProcess": "Computer Based Test, Skill Test / Typing Test, and Document Verification",
    "genders": [
      "all"
    ],
    "categories": [
      "all",
      "EWS",
      "OBC-NCL",
      "SC",
      "ST",
      "PwBD",
      "Ex-servicemen"
    ],
    "stages": [
      "Computer Based Test, Skill Test / Typing Test, and Document Verification"
    ],
    "category": "Railways",
    "officialUrl": "https://indianrailways.gov.in",
    "applyUrl": "https://indianrailways.gov.in",
    "minimumAge": 18,
    "maximumAge": 33,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10,
      "ExServicemen": 3
    },
    "ageNote": "Age varies by post."
  },
  {
    "id": "rrb-junior-stenographer",
    "name": "RRB Junior Stenographer / Junior Translator Recruitment",
    "organization": "Railway Recruitment Boards (RRB)",
    "level": "Union Government",
    "state": "All India",
    "degrees": [
      "12th Pass",
      "Any Graduate"
    ],
    "selection": "exam_only",
    "selectionProcess": "Computer Based Test and Skill Test / Language Test",
    "genders": [
      "all"
    ],
    "categories": [
      "all",
      "EWS",
      "OBC-NCL",
      "SC",
      "ST",
      "PwBD",
      "Ex-servicemen"
    ],
    "stages": [
      "Computer Based Test and Skill Test / Language Test"
    ],
    "category": "Railways",
    "officialUrl": "https://indianrailways.gov.in",
    "applyUrl": "https://indianrailways.gov.in",
    "minimumAge": 18,
    "maximumAge": 33,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10,
      "ExServicemen": 3
    },
    "ageNote": "Age varies by post."
  },
  {
    "id": "rrb-teacher",
    "name": "RRB Teacher Recruitment",
    "organization": "Railway Recruitment Boards (RRB)",
    "level": "Union Government",
    "state": "All India",
    "degrees": [
      "B.Ed",
      "D.El.Ed",
      "Any Graduate"
    ],
    "selection": "exam_only",
    "selectionProcess": "Computer Based Test and Document Verification",
    "genders": [
      "all"
    ],
    "categories": [
      "all",
      "EWS",
      "OBC-NCL",
      "SC",
      "ST",
      "PwBD",
      "Ex-servicemen"
    ],
    "stages": [
      "Computer Based Test and Document Verification"
    ],
    "category": "Railways",
    "officialUrl": "https://indianrailways.gov.in",
    "applyUrl": "https://indianrailways.gov.in",
    "minimumAge": 18,
    "maximumAge": 40,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10,
      "ExServicemen": 3
    },
    "ageNote": "Age varies by PRT, TGT, PGT, and other teaching posts."
  },
  {
    "id": "rrb-sports-quota",
    "name": "Railway Sports Quota Recruitment",
    "organization": "Railway Recruitment Boards / Railway Sports Control Board",
    "level": "Union Government",
    "state": "All India",
    "degrees": [
      "10th Pass",
      "12th Pass",
      "Any Graduate"
    ],
    "selection": "exam_and_interview",
    "selectionProcess": "Trials, Certificate Verification, and Interview as notified",
    "genders": [
      "all"
    ],
    "categories": [
      "all",
      "EWS",
      "OBC-NCL",
      "SC",
      "ST",
      "PwBD",
      "Ex-servicemen"
    ],
    "stages": [
      "Trials, Certificate Verification, and Interview as notified"
    ],
    "category": "Railways",
    "officialUrl": "https://indianrailways.gov.in",
    "applyUrl": "https://indianrailways.gov.in",
    "minimumAge": 18,
    "maximumAge": 25,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10,
      "ExServicemen": 3
    },
    "ageNote": "Age and educational criteria vary by sports discipline and post."
  },
  {
    "id": "rrb-apprentice",
    "name": "Railway Apprentice Recruitment",
    "organization": "Railway Recruitment Cells / Zonal Railways",
    "level": "Union Government",
    "state": "All India",
    "degrees": [
      "10th Pass",
      "ITI"
    ],
    "selection": "merit_based",
    "selectionProcess": "Merit-based selection based on Class 10 and ITI marks",
    "genders": [
      "all"
    ],
    "categories": [
      "all",
      "EWS",
      "OBC-NCL",
      "SC",
      "ST",
      "PwBD",
      "Ex-servicemen"
    ],
    "stages": [
      "Merit-based selection based on Class 10 and ITI marks"
    ],
    "category": "Railways",
    "officialUrl": "https://indianrailways.gov.in",
    "applyUrl": "https://indianrailways.gov.in",
    "minimumAge": 15,
    "maximumAge": 24,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10,
      "ExServicemen": 3
    },
    "ageNote": "Age varies by trade and notification."
  },
  {
    "id": "rrc-group-d",
    "name": "Railway Recruitment Cell Group D Recruitment",
    "organization": "Railway Recruitment Cells (RRC)",
    "level": "Union Government",
    "state": "All India",
    "degrees": [
      "10th Pass",
      "ITI"
    ],
    "selection": "exam_only",
    "selectionProcess": "Computer Based Test, Physical Efficiency Test, and Document Verification",
    "genders": [
      "all"
    ],
    "categories": [
      "all",
      "EWS",
      "OBC-NCL",
      "SC",
      "ST",
      "PwBD",
      "Ex-servicemen"
    ],
    "stages": [
      "Computer Based Test, Physical Efficiency Test, and Document Verification"
    ],
    "category": "Railways",
    "officialUrl": "https://indianrailways.gov.in",
    "applyUrl": "https://indianrailways.gov.in",
    "minimumAge": 18,
    "maximumAge": 33,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10,
      "ExServicemen": 3
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "rrc-apprentice",
    "name": "Railway Recruitment Cell Apprentice Recruitment",
    "organization": "Railway Recruitment Cells (RRC)",
    "level": "Union Government",
    "state": "All India",
    "degrees": [
      "10th Pass",
      "ITI"
    ],
    "selection": "merit_based",
    "selectionProcess": "Merit-based selection based on Class 10 and ITI marks",
    "genders": [
      "all"
    ],
    "categories": [
      "all",
      "EWS",
      "OBC-NCL",
      "SC",
      "ST",
      "PwBD",
      "Ex-servicemen"
    ],
    "stages": [
      "Merit-based selection based on Class 10 and ITI marks"
    ],
    "category": "Railways",
    "officialUrl": "https://indianrailways.gov.in",
    "applyUrl": "https://indianrailways.gov.in",
    "minimumAge": 15,
    "maximumAge": 24,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10,
      "ExServicemen": 3
    },
    "ageNote": "Age varies by trade and notification."
  },
  {
    "id": "rrb-je-cbt-2",
    "name": "RRB Junior Engineer CBT 2 Examination",
    "organization": "Railway Recruitment Boards (RRB)",
    "level": "Union Government",
    "state": "All India",
    "degrees": [
      "Diploma",
      "B.Tech",
      "B.E"
    ],
    "selection": "exam_only",
    "selectionProcess": "Computer Based Test 2 for shortlisted JE candidates",
    "genders": [
      "all"
    ],
    "categories": [
      "all",
      "EWS",
      "OBC-NCL",
      "SC",
      "ST",
      "PwBD",
      "Ex-servicemen"
    ],
    "stages": [
      "Computer Based Test 2 for shortlisted JE candidates"
    ],
    "category": "Railways",
    "officialUrl": "https://indianrailways.gov.in",
    "applyUrl": "https://indianrailways.gov.in",
    "minimumAge": 18,
    "maximumAge": 33,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10,
      "ExServicemen": 3
    },
    "ageNote": "This is the second stage of the RRB JE recruitment process."
  },
  {
    "id": "rrb-ntpc-cbt-2",
    "name": "RRB NTPC CBT 2 Examination",
    "organization": "Railway Recruitment Boards (RRB)",
    "level": "Union Government",
    "state": "All India",
    "degrees": [
      "Any Graduate",
      "B.A",
      "B.Sc",
      "B.Com",
      "B.Tech"
    ],
    "selection": "exam_only",
    "selectionProcess": "Computer Based Test 2 for shortlisted NTPC candidates",
    "genders": [
      "all"
    ],
    "categories": [
      "all",
      "EWS",
      "OBC-NCL",
      "SC",
      "ST",
      "PwBD",
      "Ex-servicemen"
    ],
    "stages": [
      "Computer Based Test 2 for shortlisted NTPC candidates"
    ],
    "category": "Railways",
    "officialUrl": "https://indianrailways.gov.in",
    "applyUrl": "https://indianrailways.gov.in",
    "minimumAge": 18,
    "maximumAge": 33,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10,
      "ExServicemen": 3
    },
    "ageNote": "This is the second stage of the RRB NTPC recruitment process."
  },
  {
    "id": "rrb-ald",
    "name": "RRB Assistant Loco Pilot Document Verification",
    "organization": "Railway Recruitment Boards (RRB)",
    "level": "Union Government",
    "state": "All India",
    "degrees": [
      "10th Pass",
      "ITI",
      "Diploma"
    ],
    "selection": "exam_only",
    "selectionProcess": "Document Verification and Medical Examination for qualified ALP candidates",
    "genders": [
      "all"
    ],
    "categories": [
      "all",
      "EWS",
      "OBC-NCL",
      "SC",
      "ST",
      "PwBD",
      "Ex-servicemen"
    ],
    "stages": [
      "Document Verification and Medical Examination for qualified ALP candidates"
    ],
    "category": "Railways",
    "officialUrl": "https://indianrailways.gov.in",
    "applyUrl": "https://indianrailways.gov.in",
    "minimumAge": 18,
    "maximumAge": 30,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10,
      "ExServicemen": 3
    },
    "ageNote": "This is the final stage of the RRB ALP recruitment process."
  }
];

export default BANKING_RAILWAY_EXAMS;

