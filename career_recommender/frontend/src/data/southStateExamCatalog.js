// Normalized from the user-provided Andhra Pradesh, Telangana, Karnataka, and Kerala datasets. Verify the latest notification before applying.
const SOUTH_STATE_EXAMS = [
  {
    "id": "appsc-group-1",
    "name": "APPSC Group I Services Examination",
    "organization": "Andhra Pradesh Public Service Commission",
    "level": "State Government",
    "state": "Andhra Pradesh",
    "degrees": [
      "Any Graduate",
      "B.A",
      "B.Sc",
      "B.Com",
      "B.Tech",
      "MBBS",
      "LL.B"
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
    "category": "Andhra Pradesh Civil Services",
    "officialUrl": "https://psc.ap.gov.in",
    "applyUrl": "https://psc.ap.gov.in",
    "minimumAge": 18,
    "maximumAge": 42,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Age varies by post and category."
  },
  {
    "id": "appsc-group-2",
    "name": "APPSC Group II Services Examination",
    "organization": "Andhra Pradesh Public Service Commission",
    "level": "State Government",
    "state": "Andhra Pradesh",
    "degrees": [
      "Any Graduate",
      "B.A",
      "B.Sc",
      "B.Com",
      "B.Tech",
      "MBBS",
      "LL.B"
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
    "category": "Andhra Pradesh Civil Services",
    "officialUrl": "https://psc.ap.gov.in",
    "applyUrl": "https://psc.ap.gov.in",
    "minimumAge": 18,
    "maximumAge": 42,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Age varies by post and category."
  },
  {
    "id": "appsc-group-3",
    "name": "APPSC Group III Panchayat Secretary / Village Revenue Officer Examination",
    "organization": "Andhra Pradesh Public Service Commission",
    "level": "State Government",
    "state": "Andhra Pradesh",
    "degrees": [
      "12th Pass",
      "Any Graduate"
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
    "category": "Rural Development Jobs",
    "officialUrl": "https://psc.ap.gov.in",
    "applyUrl": "https://psc.ap.gov.in",
    "minimumAge": 18,
    "maximumAge": 42,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Age varies by post."
  },
  {
    "id": "appsc-group-4",
    "name": "APPSC Group IV Services Examination",
    "organization": "Andhra Pradesh Public Service Commission",
    "level": "State Government",
    "state": "Andhra Pradesh",
    "degrees": [
      "12th Pass",
      "Any Graduate"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination and Document Verification",
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
      "Written Examination and Document Verification"
    ],
    "category": "State Government Jobs",
    "officialUrl": "https://psc.ap.gov.in",
    "applyUrl": "https://psc.ap.gov.in",
    "minimumAge": 18,
    "maximumAge": 42,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Age varies by post."
  },
  {
    "id": "appsc-junior-assistant",
    "name": "APPSC Junior Assistant / Junior Accountant Examination",
    "organization": "Andhra Pradesh Public Service Commission",
    "level": "State Government",
    "state": "Andhra Pradesh",
    "degrees": [
      "12th Pass",
      "Any Graduate"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination and Document Verification",
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
      "Written Examination and Document Verification"
    ],
    "category": "State Government Jobs",
    "officialUrl": "https://psc.ap.gov.in",
    "applyUrl": "https://psc.ap.gov.in",
    "minimumAge": 18,
    "maximumAge": 42,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "appsc-typist",
    "name": "APPSC Typist / Junior Assistant Typing Examination",
    "organization": "Andhra Pradesh Public Service Commission",
    "level": "State Government",
    "state": "Andhra Pradesh",
    "degrees": [
      "12th Pass",
      "Any Graduate"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination and Typing Skill Test",
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
      "Written Examination and Typing Skill Test"
    ],
    "category": "State Government Jobs",
    "officialUrl": "https://psc.ap.gov.in",
    "applyUrl": "https://psc.ap.gov.in",
    "minimumAge": 18,
    "maximumAge": 42,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "appsc-technical-assistant",
    "name": "APPSC Technical Assistant Examination",
    "organization": "Andhra Pradesh Public Service Commission",
    "level": "State Government",
    "state": "Andhra Pradesh",
    "degrees": [
      "Diploma",
      "B.Tech",
      "B.E",
      "Any Graduate"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination and Document Verification",
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
      "Written Examination and Document Verification"
    ],
    "category": "Technical Jobs",
    "officialUrl": "https://psc.ap.gov.in",
    "applyUrl": "https://psc.ap.gov.in",
    "minimumAge": 18,
    "maximumAge": 42,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Age varies by post."
  },
  {
    "id": "appsc-assistant-engineer",
    "name": "APPSC Assistant Engineer Recruitment",
    "organization": "Andhra Pradesh Public Service Commission",
    "level": "State Government",
    "state": "Andhra Pradesh",
    "degrees": [
      "B.Tech",
      "B.E"
    ],
    "selection": "exam_and_interview",
    "selectionProcess": "Written Examination and Interview",
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
      "Written Examination and Interview"
    ],
    "category": "Engineering Jobs",
    "officialUrl": "https://psc.ap.gov.in",
    "applyUrl": "https://psc.ap.gov.in",
    "minimumAge": 18,
    "maximumAge": 42,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "appsc-junior-engineer",
    "name": "APPSC Junior Engineer Recruitment",
    "organization": "Andhra Pradesh Public Service Commission",
    "level": "State Government",
    "state": "Andhra Pradesh",
    "degrees": [
      "Diploma",
      "B.Tech",
      "B.E"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination and Document Verification",
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
      "Written Examination and Document Verification"
    ],
    "category": "Engineering Jobs",
    "officialUrl": "https://psc.ap.gov.in",
    "applyUrl": "https://psc.ap.gov.in",
    "minimumAge": 18,
    "maximumAge": 42,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "appsc-staff-nurse",
    "name": "APPSC Staff Nurse Recruitment",
    "organization": "Andhra Pradesh Public Service Commission",
    "level": "State Government",
    "state": "Andhra Pradesh",
    "degrees": [
      "B.Sc Nursing",
      "Diploma Nursing"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination and Document Verification",
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
      "Written Examination and Document Verification"
    ],
    "category": "Medical Jobs",
    "officialUrl": "https://psc.ap.gov.in",
    "applyUrl": "https://psc.ap.gov.in",
    "minimumAge": 18,
    "maximumAge": 42,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "appsc-pharmacist",
    "name": "APPSC Pharmacist Recruitment",
    "organization": "Andhra Pradesh Public Service Commission",
    "level": "State Government",
    "state": "Andhra Pradesh",
    "degrees": [
      "D.Pharm",
      "B.Pharm"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination and Document Verification",
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
      "Written Examination and Document Verification"
    ],
    "category": "Medical Jobs",
    "officialUrl": "https://psc.ap.gov.in",
    "applyUrl": "https://psc.ap.gov.in",
    "minimumAge": 18,
    "maximumAge": 42,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "appsc-lab-technician",
    "name": "APPSC Laboratory Technician Recruitment",
    "organization": "Andhra Pradesh Public Service Commission",
    "level": "State Government",
    "state": "Andhra Pradesh",
    "degrees": [
      "Diploma Medical Lab Technology",
      "B.Sc"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination and Document Verification",
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
      "Written Examination and Document Verification"
    ],
    "category": "Medical Jobs",
    "officialUrl": "https://psc.ap.gov.in",
    "applyUrl": "https://psc.ap.gov.in",
    "minimumAge": 18,
    "maximumAge": 42,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "appsc-medical-officer",
    "name": "APPSC Medical Officer Recruitment",
    "organization": "Andhra Pradesh Public Service Commission",
    "level": "State Government",
    "state": "Andhra Pradesh",
    "degrees": [
      "MBBS"
    ],
    "selection": "exam_and_interview",
    "selectionProcess": "Written Examination and Interview",
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
      "Written Examination and Interview"
    ],
    "category": "Medical Jobs",
    "officialUrl": "https://psc.ap.gov.in",
    "applyUrl": "https://psc.ap.gov.in",
    "minimumAge": 18,
    "maximumAge": 42,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "appsc-dsc-teacher",
    "name": "AP DSC Teacher Recruitment",
    "organization": "Department of School Education, Andhra Pradesh",
    "level": "State Government",
    "state": "Andhra Pradesh",
    "degrees": [
      "D.El.Ed",
      "B.Ed",
      "Any Graduate"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination and Document Verification",
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
      "Written Examination and Document Verification"
    ],
    "category": "Teaching",
    "officialUrl": "https://apdsc.apcfss.in",
    "applyUrl": "https://apdsc.apcfss.in",
    "minimumAge": 18,
    "maximumAge": 44,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Age varies by SGT, School Assistant, and other teaching posts."
  },
  {
    "id": "ap-dsc-sgt",
    "name": "AP DSC Secondary Grade Teacher (SGT) Recruitment",
    "organization": "Department of School Education, Andhra Pradesh",
    "level": "State Government",
    "state": "Andhra Pradesh",
    "degrees": [
      "D.El.Ed",
      "B.Ed"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination and Document Verification",
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
      "Written Examination and Document Verification"
    ],
    "category": "Teaching",
    "officialUrl": "https://apdsc.apcfss.in",
    "applyUrl": "https://apdsc.apcfss.in",
    "minimumAge": 18,
    "maximumAge": 44,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "ap-dsc-school-assistant",
    "name": "AP DSC School Assistant Recruitment",
    "organization": "Department of School Education, Andhra Pradesh",
    "level": "State Government",
    "state": "Andhra Pradesh",
    "degrees": [
      "B.Ed",
      "Any Graduate"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination and Document Verification",
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
      "Written Examination and Document Verification"
    ],
    "category": "Teaching",
    "officialUrl": "https://apdsc.apcfss.in",
    "applyUrl": "https://apdsc.apcfss.in",
    "minimumAge": 18,
    "maximumAge": 44,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "ap-tet",
    "name": "Andhra Pradesh Teacher Eligibility Test (AP TET)",
    "organization": "Department of School Education, Andhra Pradesh",
    "level": "State Government",
    "state": "Andhra Pradesh",
    "degrees": [
      "D.El.Ed",
      "B.Ed"
    ],
    "selection": "exam_only",
    "selectionProcess": "Computer Based Test",
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
      "Computer Based Test"
    ],
    "category": "Teaching",
    "officialUrl": "https://aptet.apcfss.in",
    "applyUrl": "https://aptet.apcfss.in",
    "minimumAge": 18,
    "maximumAge": null,
    "ageRelaxation": {
      "OBC": 0,
      "SC_ST": 0,
      "PwBD": 0
    },
    "ageNote": "No upper age limit; verify notification."
  },
  {
    "id": "ap-set",
    "name": "Andhra Pradesh State Eligibility Test (AP SET)",
    "organization": "Andhra University",
    "level": "State Government",
    "state": "Andhra Pradesh",
    "degrees": [
      "Postgraduate"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination",
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
      "Written Examination"
    ],
    "category": "Teaching & Research",
    "officialUrl": "https://apset.net",
    "applyUrl": "https://apset.net",
    "minimumAge": null,
    "maximumAge": null,
    "ageRelaxation": {
      "OBC": 0,
      "SC_ST": 0,
      "PwBD": 0
    },
    "ageNote": "No age limit."
  },
  {
    "id": "ap-eapcet",
    "name": "Andhra Pradesh Engineering, Agriculture and Pharmacy Common Entrance Test (AP EAPCET)",
    "organization": "APSCHE",
    "level": "State Government",
    "state": "Andhra Pradesh",
    "degrees": [
      "10+2 / Equivalent"
    ],
    "selection": "exam_only",
    "selectionProcess": "Computer Based Test and Counselling",
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
      "Computer Based Test and Counselling"
    ],
    "category": "State Entrance",
    "officialUrl": "https://cets.apsche.ap.gov.in",
    "applyUrl": "https://cets.apsche.ap.gov.in",
    "minimumAge": 16,
    "maximumAge": null,
    "ageRelaxation": {
      "OBC": 0,
      "SC_ST": 0,
      "PwBD": 0
    },
    "ageNote": "Minimum age 16 as on 31 December of admission year."
  },
  {
    "id": "ap-lawcet",
    "name": "Andhra Pradesh Law Common Entrance Test (AP LAWCET)",
    "organization": "APSCHE",
    "level": "State Government",
    "state": "Andhra Pradesh",
    "degrees": [
      "12th Pass",
      "Any Graduate"
    ],
    "selection": "exam_only",
    "selectionProcess": "Computer Based Test and Counselling",
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
      "Computer Based Test and Counselling"
    ],
    "category": "Law Admission",
    "officialUrl": "https://cets.apsche.ap.gov.in",
    "applyUrl": "https://cets.apsche.ap.gov.in",
    "minimumAge": null,
    "maximumAge": null,
    "ageRelaxation": {
      "OBC": 0,
      "SC_ST": 0,
      "PwBD": 0
    },
    "ageNote": "No fixed age limit; verify programme-specific rules."
  },
  {
    "id": "ap-police-constable",
    "name": "Andhra Pradesh Police Constable Recruitment",
    "organization": "Andhra Pradesh State Level Police Recruitment Board",
    "level": "State Government",
    "state": "Andhra Pradesh",
    "degrees": [
      "12th Pass"
    ],
    "selection": "exam_only",
    "selectionProcess": "Preliminary Written Test, Physical Measurement Test, Physical Efficiency Test, and Final Written Examination",
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
      "Preliminary Written Test, Physical Measurement Test, Physical Efficiency Test, and Final Written Examination"
    ],
    "category": "Police Recruitment",
    "officialUrl": "https://slprb.ap.gov.in",
    "applyUrl": "https://slprb.ap.gov.in",
    "minimumAge": 18,
    "maximumAge": 25,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Age varies by gender, category, and post."
  },
  {
    "id": "ap-police-si",
    "name": "Andhra Pradesh Police Sub-Inspector Recruitment",
    "organization": "Andhra Pradesh State Level Police Recruitment Board",
    "level": "State Government",
    "state": "Andhra Pradesh",
    "degrees": [
      "Any Graduate",
      "B.A",
      "B.Sc",
      "B.Com",
      "B.Tech",
      "MBBS",
      "LL.B"
    ],
    "selection": "exam_only",
    "selectionProcess": "Preliminary Written Test, Physical Measurement Test, Physical Efficiency Test, and Final Written Examination",
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
      "Preliminary Written Test, Physical Measurement Test, Physical Efficiency Test, and Final Written Examination"
    ],
    "category": "Police Recruitment",
    "officialUrl": "https://slprb.ap.gov.in",
    "applyUrl": "https://slprb.ap.gov.in",
    "minimumAge": 21,
    "maximumAge": 28,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Age varies by gender, category, and post."
  },
  {
    "id": "ap-police-constable-communications",
    "name": "AP Police Constable Communications / Technical Recruitment",
    "organization": "Andhra Pradesh State Level Police Recruitment Board",
    "level": "State Government",
    "state": "Andhra Pradesh",
    "degrees": [
      "Diploma",
      "B.Tech",
      "B.E"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination, Physical Test, and Document Verification",
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
      "Written Examination, Physical Test, and Document Verification"
    ],
    "category": "Police Recruitment",
    "officialUrl": "https://slprb.ap.gov.in",
    "applyUrl": "https://slprb.ap.gov.in",
    "minimumAge": 18,
    "maximumAge": 30,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Age varies by technical post."
  },
  {
    "id": "ap-forest-beat-officer",
    "name": "Andhra Pradesh Forest Beat Officer Recruitment",
    "organization": "Andhra Pradesh Forest Department / APPSC",
    "level": "State Government",
    "state": "Andhra Pradesh",
    "degrees": [
      "10th Pass",
      "12th Pass"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination, Physical Efficiency Test, and Medical Examination",
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
      "Written Examination, Physical Efficiency Test, and Medical Examination"
    ],
    "category": "Forest Services",
    "officialUrl": "https://forest.ap.gov.in",
    "applyUrl": "https://forest.ap.gov.in",
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
    "id": "ap-forest-section-officer",
    "name": "Andhra Pradesh Forest Section Officer Recruitment",
    "organization": "Andhra Pradesh Forest Department / APPSC",
    "level": "State Government",
    "state": "Andhra Pradesh",
    "degrees": [
      "12th Pass",
      "Any Graduate"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination, Physical Efficiency Test, and Medical Examination",
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
      "Written Examination, Physical Efficiency Test, and Medical Examination"
    ],
    "category": "Forest Services",
    "officialUrl": "https://forest.ap.gov.in",
    "applyUrl": "https://forest.ap.gov.in",
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
    "id": "ap-high-court-civil-judge",
    "name": "Andhra Pradesh Civil Judge Recruitment Examination",
    "organization": "Andhra Pradesh High Court",
    "level": "State Government",
    "state": "Andhra Pradesh",
    "degrees": [
      "LL.B"
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
    "category": "Judiciary",
    "officialUrl": "https://aphc.gov.in",
    "applyUrl": "https://aphc.gov.in",
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
    "id": "ap-district-judge",
    "name": "Andhra Pradesh District Judge Recruitment Examination",
    "organization": "Andhra Pradesh High Court",
    "level": "State Government",
    "state": "Andhra Pradesh",
    "degrees": [
      "LL.B"
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
    "category": "Judiciary",
    "officialUrl": "https://aphc.gov.in",
    "applyUrl": "https://aphc.gov.in",
    "minimumAge": 35,
    "maximumAge": 45,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Age varies by bar experience and category."
  },
  {
    "id": "ap-grama-sachivalayam",
    "name": "Andhra Pradesh Grama Sachivalayam / Village Secretariat Recruitment",
    "organization": "Andhra Pradesh Panchayat Raj and Rural Development Department",
    "level": "State Government",
    "state": "Andhra Pradesh",
    "degrees": [
      "12th Pass",
      "Any Graduate"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination and Document Verification",
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
      "Written Examination and Document Verification"
    ],
    "category": "Rural Development Jobs",
    "officialUrl": "https://gramasachivalayam.ap.gov.in",
    "applyUrl": "https://gramasachivalayam.ap.gov.in",
    "minimumAge": 18,
    "maximumAge": 42,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Age varies by post and notification."
  },
  {
    "id": "ap-anganwadi-worker",
    "name": "Andhra Pradesh Anganwadi Worker / Helper Recruitment",
    "organization": "Andhra Pradesh Women Development and Child Welfare Department",
    "level": "State Government",
    "state": "Andhra Pradesh",
    "degrees": [
      "10th Pass",
      "12th Pass"
    ],
    "selection": "merit_based",
    "selectionProcess": "Merit-based selection and Document Verification",
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
      "Merit-based selection and Document Verification"
    ],
    "category": "Women & Child Development Jobs",
    "officialUrl": "https://wdcw.ap.gov.in",
    "applyUrl": "https://wdcw.ap.gov.in",
    "minimumAge": 18,
    "maximumAge": 42,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Age varies by post and district notification."
  },
  {
    "id": "ap-vidya-volunteer",
    "name": "Andhra Pradesh Vidya Volunteer Recruitment",
    "organization": "Department of School Education, Andhra Pradesh",
    "level": "State Government",
    "state": "Andhra Pradesh",
    "degrees": [
      "12th Pass",
      "Any Graduate"
    ],
    "selection": "merit_based",
    "selectionProcess": "Merit-based selection and Document Verification",
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
      "Merit-based selection and Document Verification"
    ],
    "category": "Teaching",
    "officialUrl": "https://schooleducation.ap.gov.in",
    "applyUrl": "https://schooleducation.ap.gov.in",
    "minimumAge": 18,
    "maximumAge": 42,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Eligibility and age vary by district notification."
  },
  {
    "id": "ap-cooperative-bank",
    "name": "Andhra Pradesh State Co-operative Bank Recruitment",
    "organization": "Andhra Pradesh State Co-operative Bank",
    "level": "State Government",
    "state": "Andhra Pradesh",
    "degrees": [
      "Any Graduate",
      "B.A",
      "B.Sc",
      "B.Com",
      "B.Tech",
      "MBBS",
      "LL.B"
    ],
    "selection": "exam_and_interview",
    "selectionProcess": "Written Examination and Interview",
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
      "Written Examination and Interview"
    ],
    "category": "Banking / State Financial Institutions",
    "officialUrl": "https://apcobanks.com",
    "applyUrl": "https://apcobanks.com",
    "minimumAge": 21,
    "maximumAge": 30,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Age varies by post and notification."
  },
  {
    "id": "tspsc-group-1",
    "name": "TSPSC Group I Services Examination",
    "organization": "Telangana State Public Service Commission",
    "level": "State Government",
    "state": "Telangana",
    "degrees": [
      "Any Graduate",
      "B.A",
      "B.Sc",
      "B.Com",
      "B.Tech",
      "MBBS",
      "LL.B"
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
    "category": "Telangana Civil Services",
    "officialUrl": "https://websitetpsc.cgg.gov.in",
    "applyUrl": "https://websitetpsc.cgg.gov.in",
    "minimumAge": 18,
    "maximumAge": 46,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Age varies by post and category."
  },
  {
    "id": "tspsc-group-2",
    "name": "TSPSC Group II Services Examination",
    "organization": "Telangana State Public Service Commission",
    "level": "State Government",
    "state": "Telangana",
    "degrees": [
      "Any Graduate",
      "B.A",
      "B.Sc",
      "B.Com",
      "B.Tech",
      "MBBS",
      "LL.B"
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
    "category": "Telangana Civil Services",
    "officialUrl": "https://websitetpsc.cgg.gov.in",
    "applyUrl": "https://websitetpsc.cgg.gov.in",
    "minimumAge": 18,
    "maximumAge": 46,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Age varies by post and category."
  },
  {
    "id": "tspsc-group-3",
    "name": "TSPSC Group III Services Examination",
    "organization": "Telangana State Public Service Commission",
    "level": "State Government",
    "state": "Telangana",
    "degrees": [
      "Any Graduate",
      "B.A",
      "B.Sc",
      "B.Com",
      "B.Tech",
      "MBBS",
      "LL.B"
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
    "category": "Telangana Civil Services",
    "officialUrl": "https://websitetpsc.cgg.gov.in",
    "applyUrl": "https://websitetpsc.cgg.gov.in",
    "minimumAge": 18,
    "maximumAge": 46,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Age varies by post and category."
  },
  {
    "id": "tspsc-group-4",
    "name": "TSPSC Group IV Services Examination",
    "organization": "Telangana State Public Service Commission",
    "level": "State Government",
    "state": "Telangana",
    "degrees": [
      "12th Pass",
      "Any Graduate"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination and Document Verification",
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
      "Written Examination and Document Verification"
    ],
    "category": "State Government Jobs",
    "officialUrl": "https://websitetpsc.cgg.gov.in",
    "applyUrl": "https://websitetpsc.cgg.gov.in",
    "minimumAge": 18,
    "maximumAge": 46,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Age varies by post."
  },
  {
    "id": "tspsc-junior-assistant",
    "name": "TSPSC Junior Assistant / Junior Accountant Examination",
    "organization": "Telangana State Public Service Commission",
    "level": "State Government",
    "state": "Telangana",
    "degrees": [
      "12th Pass",
      "Any Graduate"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination and Document Verification",
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
      "Written Examination and Document Verification"
    ],
    "category": "State Government Jobs",
    "officialUrl": "https://websitetpsc.cgg.gov.in",
    "applyUrl": "https://websitetpsc.cgg.gov.in",
    "minimumAge": 18,
    "maximumAge": 46,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "tspsc-typist",
    "name": "TSPSC Typist / Junior Stenographer Examination",
    "organization": "Telangana State Public Service Commission",
    "level": "State Government",
    "state": "Telangana",
    "degrees": [
      "12th Pass",
      "Any Graduate"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination and Typing / Shorthand Skill Test",
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
      "Written Examination and Typing / Shorthand Skill Test"
    ],
    "category": "State Government Jobs",
    "officialUrl": "https://websitetpsc.cgg.gov.in",
    "applyUrl": "https://websitetpsc.cgg.gov.in",
    "minimumAge": 18,
    "maximumAge": 46,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "tspsc-technical-assistant",
    "name": "TSPSC Technical Assistant Examination",
    "organization": "Telangana State Public Service Commission",
    "level": "State Government",
    "state": "Telangana",
    "degrees": [
      "Diploma",
      "B.Tech",
      "B.E",
      "Any Graduate"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination and Document Verification",
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
      "Written Examination and Document Verification"
    ],
    "category": "Technical Jobs",
    "officialUrl": "https://websitetpsc.cgg.gov.in",
    "applyUrl": "https://websitetpsc.cgg.gov.in",
    "minimumAge": 18,
    "maximumAge": 46,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Age varies by post."
  },
  {
    "id": "tspsc-assistant-engineer",
    "name": "TSPSC Assistant Engineer Recruitment",
    "organization": "Telangana State Public Service Commission",
    "level": "State Government",
    "state": "Telangana",
    "degrees": [
      "B.Tech",
      "B.E"
    ],
    "selection": "exam_and_interview",
    "selectionProcess": "Written Examination and Interview",
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
      "Written Examination and Interview"
    ],
    "category": "Engineering Jobs",
    "officialUrl": "https://websitetpsc.cgg.gov.in",
    "applyUrl": "https://websitetpsc.cgg.gov.in",
    "minimumAge": 18,
    "maximumAge": 46,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "tspsc-junior-engineer",
    "name": "TSPSC Junior Engineer Recruitment",
    "organization": "Telangana State Public Service Commission",
    "level": "State Government",
    "state": "Telangana",
    "degrees": [
      "Diploma",
      "B.Tech",
      "B.E"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination and Document Verification",
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
      "Written Examination and Document Verification"
    ],
    "category": "Engineering Jobs",
    "officialUrl": "https://websitetpsc.cgg.gov.in",
    "applyUrl": "https://websitetpsc.cgg.gov.in",
    "minimumAge": 18,
    "maximumAge": 46,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "tspsc-town-planning-assistant",
    "name": "TSPSC Town Planning Assistant / Technical Officer Recruitment",
    "organization": "Telangana State Public Service Commission",
    "level": "State Government",
    "state": "Telangana",
    "degrees": [
      "B.Tech",
      "B.E",
      "B.Planning"
    ],
    "selection": "exam_and_interview",
    "selectionProcess": "Written Examination and Interview",
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
      "Written Examination and Interview"
    ],
    "category": "Engineering Jobs",
    "officialUrl": "https://websitetpsc.cgg.gov.in",
    "applyUrl": "https://websitetpsc.cgg.gov.in",
    "minimumAge": 18,
    "maximumAge": 46,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "tspsc-staff-nurse",
    "name": "TSPSC Staff Nurse Recruitment",
    "organization": "Telangana State Public Service Commission",
    "level": "State Government",
    "state": "Telangana",
    "degrees": [
      "B.Sc Nursing",
      "Diploma Nursing"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination and Document Verification",
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
      "Written Examination and Document Verification"
    ],
    "category": "Medical Jobs",
    "officialUrl": "https://websitetpsc.cgg.gov.in",
    "applyUrl": "https://websitetpsc.cgg.gov.in",
    "minimumAge": 18,
    "maximumAge": 46,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "tspsc-pharmacist",
    "name": "TSPSC Pharmacist Recruitment",
    "organization": "Telangana State Public Service Commission",
    "level": "State Government",
    "state": "Telangana",
    "degrees": [
      "D.Pharm",
      "B.Pharm"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination and Document Verification",
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
      "Written Examination and Document Verification"
    ],
    "category": "Medical Jobs",
    "officialUrl": "https://websitetpsc.cgg.gov.in",
    "applyUrl": "https://websitetpsc.cgg.gov.in",
    "minimumAge": 18,
    "maximumAge": 46,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "tspsc-lab-technician",
    "name": "TSPSC Laboratory Technician Recruitment",
    "organization": "Telangana State Public Service Commission",
    "level": "State Government",
    "state": "Telangana",
    "degrees": [
      "Diploma Medical Lab Technology",
      "B.Sc"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination and Document Verification",
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
      "Written Examination and Document Verification"
    ],
    "category": "Medical Jobs",
    "officialUrl": "https://websitetpsc.cgg.gov.in",
    "applyUrl": "https://websitetpsc.cgg.gov.in",
    "minimumAge": 18,
    "maximumAge": 46,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "tspsc-medical-officer",
    "name": "TSPSC Medical Officer Recruitment",
    "organization": "Telangana State Public Service Commission",
    "level": "State Government",
    "state": "Telangana",
    "degrees": [
      "MBBS"
    ],
    "selection": "exam_and_interview",
    "selectionProcess": "Written Examination and Interview",
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
      "Written Examination and Interview"
    ],
    "category": "Medical Jobs",
    "officialUrl": "https://websitetpsc.cgg.gov.in",
    "applyUrl": "https://websitetpsc.cgg.gov.in",
    "minimumAge": 18,
    "maximumAge": 46,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "tspsc-gurukul-teacher",
    "name": "TSPSC Gurukul Teacher Recruitment",
    "organization": "Telangana State Public Service Commission",
    "level": "State Government",
    "state": "Telangana",
    "degrees": [
      "B.Ed",
      "D.El.Ed",
      "Any Graduate"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination and Document Verification",
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
      "Written Examination and Document Verification"
    ],
    "category": "Teaching",
    "officialUrl": "https://websitetpsc.cgg.gov.in",
    "applyUrl": "https://websitetpsc.cgg.gov.in",
    "minimumAge": 18,
    "maximumAge": 46,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Age varies by residential educational institution and post."
  },
  {
    "id": "tspsc-gurukul-junior-lecturer",
    "name": "TSPSC Gurukul Junior Lecturer Recruitment",
    "organization": "Telangana State Public Service Commission",
    "level": "State Government",
    "state": "Telangana",
    "degrees": [
      "Postgraduate"
    ],
    "selection": "exam_and_interview",
    "selectionProcess": "Written Examination and Interview",
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
      "Written Examination and Interview"
    ],
    "category": "Teaching",
    "officialUrl": "https://websitetpsc.cgg.gov.in",
    "applyUrl": "https://websitetpsc.cgg.gov.in",
    "minimumAge": 18,
    "maximumAge": 46,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "tspsc-school-assistant",
    "name": "TSPSC School Assistant Recruitment",
    "organization": "Telangana State Public Service Commission",
    "level": "State Government",
    "state": "Telangana",
    "degrees": [
      "B.Ed",
      "Any Graduate"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination and Document Verification",
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
      "Written Examination and Document Verification"
    ],
    "category": "Teaching",
    "officialUrl": "https://websitetpsc.cgg.gov.in",
    "applyUrl": "https://websitetpsc.cgg.gov.in",
    "minimumAge": 18,
    "maximumAge": 46,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "tspsc-secondary-grade-teacher",
    "name": "TSPSC Secondary Grade Teacher (SGT) Recruitment",
    "organization": "Telangana State Public Service Commission",
    "level": "State Government",
    "state": "Telangana",
    "degrees": [
      "D.El.Ed",
      "B.Ed"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination and Document Verification",
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
      "Written Examination and Document Verification"
    ],
    "category": "Teaching",
    "officialUrl": "https://websitetpsc.cgg.gov.in",
    "applyUrl": "https://websitetpsc.cgg.gov.in",
    "minimumAge": 18,
    "maximumAge": 46,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "tspsc-physical-education-teacher",
    "name": "TSPSC Physical Education Teacher Recruitment",
    "organization": "Telangana State Public Service Commission",
    "level": "State Government",
    "state": "Telangana",
    "degrees": [
      "B.P.Ed",
      "D.P.Ed"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination and Physical Efficiency Test",
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
      "Written Examination and Physical Efficiency Test"
    ],
    "category": "Teaching",
    "officialUrl": "https://websitetpsc.cgg.gov.in",
    "applyUrl": "https://websitetpsc.cgg.gov.in",
    "minimumAge": 18,
    "maximumAge": 46,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "ts-tet",
    "name": "Telangana Teacher Eligibility Test (TS TET)",
    "organization": "Department of School Education, Telangana",
    "level": "State Government",
    "state": "Telangana",
    "degrees": [
      "D.El.Ed",
      "B.Ed"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination",
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
      "Written Examination"
    ],
    "category": "Teaching",
    "officialUrl": "https://tstet.cgg.gov.in",
    "applyUrl": "https://tstet.cgg.gov.in",
    "minimumAge": 18,
    "maximumAge": null,
    "ageRelaxation": {
      "OBC": 0,
      "SC_ST": 0,
      "PwBD": 0
    },
    "ageNote": "No upper age limit; verify notification."
  },
  {
    "id": "ts-set",
    "name": "Telangana State Eligibility Test (TS SET)",
    "organization": "Osmania University",
    "level": "State Government",
    "state": "Telangana",
    "degrees": [
      "Postgraduate"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination",
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
      "Written Examination"
    ],
    "category": "Teaching & Research",
    "officialUrl": "https://telanganaset.org",
    "applyUrl": "https://telanganaset.org",
    "minimumAge": null,
    "maximumAge": null,
    "ageRelaxation": {
      "OBC": 0,
      "SC_ST": 0,
      "PwBD": 0
    },
    "ageNote": "No age limit."
  },
  {
    "id": "ts-eamcet",
    "name": "Telangana Engineering, Agriculture and Medical Common Entrance Test (TS EAMCET)",
    "organization": "TSCHE",
    "level": "State Government",
    "state": "Telangana",
    "degrees": [
      "10+2 / Equivalent"
    ],
    "selection": "exam_only",
    "selectionProcess": "Computer Based Test and Counselling",
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
      "Computer Based Test and Counselling"
    ],
    "category": "State Entrance",
    "officialUrl": "https://tgeapcet.nic.in",
    "applyUrl": "https://tgeapcet.nic.in",
    "minimumAge": 16,
    "maximumAge": null,
    "ageRelaxation": {
      "OBC": 0,
      "SC_ST": 0,
      "PwBD": 0
    },
    "ageNote": "Minimum age 16 as on 31 December of admission year."
  },
  {
    "id": "ts-lawcet",
    "name": "Telangana Law Common Entrance Test (TS LAWCET)",
    "organization": "Osmania University / TSCHE",
    "level": "State Government",
    "state": "Telangana",
    "degrees": [
      "12th Pass",
      "Any Graduate"
    ],
    "selection": "exam_only",
    "selectionProcess": "Computer Based Test and Counselling",
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
      "Computer Based Test and Counselling"
    ],
    "category": "Law Admission",
    "officialUrl": "https://lawcet.tsche.ac.in",
    "applyUrl": "https://lawcet.tsche.ac.in",
    "minimumAge": null,
    "maximumAge": null,
    "ageRelaxation": {
      "OBC": 0,
      "SC_ST": 0,
      "PwBD": 0
    },
    "ageNote": "No fixed age limit; verify programme-specific rules."
  },
  {
    "id": "ts-police-constable",
    "name": "Telangana State Police Constable Recruitment",
    "organization": "Telangana State Level Police Recruitment Board",
    "level": "State Government",
    "state": "Telangana",
    "degrees": [
      "12th Pass"
    ],
    "selection": "exam_only",
    "selectionProcess": "Preliminary Written Test, Physical Measurement Test, Physical Efficiency Test, and Final Written Examination",
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
      "Preliminary Written Test, Physical Measurement Test, Physical Efficiency Test, and Final Written Examination"
    ],
    "category": "Police Recruitment",
    "officialUrl": "https://www.tslprb.in",
    "applyUrl": "https://www.tslprb.in",
    "minimumAge": 18,
    "maximumAge": 25,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Age varies by gender, category, and post."
  },
  {
    "id": "ts-police-si",
    "name": "Telangana State Police Sub-Inspector Recruitment",
    "organization": "Telangana State Level Police Recruitment Board",
    "level": "State Government",
    "state": "Telangana",
    "degrees": [
      "Any Graduate",
      "B.A",
      "B.Sc",
      "B.Com",
      "B.Tech",
      "MBBS",
      "LL.B"
    ],
    "selection": "exam_only",
    "selectionProcess": "Preliminary Written Test, Physical Measurement Test, Physical Efficiency Test, and Final Written Examination",
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
      "Preliminary Written Test, Physical Measurement Test, Physical Efficiency Test, and Final Written Examination"
    ],
    "category": "Police Recruitment",
    "officialUrl": "https://www.tslprb.in",
    "applyUrl": "https://www.tslprb.in",
    "minimumAge": 21,
    "maximumAge": 28,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Age varies by gender, category, and post."
  },
  {
    "id": "ts-police-constable-communications",
    "name": "Telangana Police Constable Communications Recruitment",
    "organization": "Telangana State Level Police Recruitment Board",
    "level": "State Government",
    "state": "Telangana",
    "degrees": [
      "Diploma",
      "B.Tech",
      "B.E"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination, Physical Test, and Document Verification",
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
      "Written Examination, Physical Test, and Document Verification"
    ],
    "category": "Police Recruitment",
    "officialUrl": "https://www.tslprb.in",
    "applyUrl": "https://www.tslprb.in",
    "minimumAge": 18,
    "maximumAge": 30,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Age varies by technical post."
  },
  {
    "id": "ts-forest-beat-officer",
    "name": "Telangana Forest Beat Officer Recruitment",
    "organization": "Telangana State Forest Department / TSPSC",
    "level": "State Government",
    "state": "Telangana",
    "degrees": [
      "10th Pass",
      "12th Pass"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination, Physical Efficiency Test, and Medical Examination",
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
      "Written Examination, Physical Efficiency Test, and Medical Examination"
    ],
    "category": "Forest Services",
    "officialUrl": "https://www.telangana.gov.in",
    "applyUrl": "https://www.telangana.gov.in",
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
    "id": "ts-forest-section-officer",
    "name": "Telangana Forest Section Officer Recruitment",
    "organization": "Telangana State Forest Department / TSPSC",
    "level": "State Government",
    "state": "Telangana",
    "degrees": [
      "12th Pass",
      "Any Graduate"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination, Physical Efficiency Test, and Medical Examination",
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
      "Written Examination, Physical Efficiency Test, and Medical Examination"
    ],
    "category": "Forest Services",
    "officialUrl": "https://www.telangana.gov.in",
    "applyUrl": "https://www.telangana.gov.in",
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
    "id": "ts-high-court-civil-judge",
    "name": "Telangana Civil Judge Recruitment Examination",
    "organization": "Telangana High Court",
    "level": "State Government",
    "state": "Telangana",
    "degrees": [
      "LL.B"
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
    "category": "Judiciary",
    "officialUrl": "https://tshc.gov.in",
    "applyUrl": "https://tshc.gov.in",
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
    "id": "ts-district-judge",
    "name": "Telangana District Judge Recruitment Examination",
    "organization": "Telangana High Court",
    "level": "State Government",
    "state": "Telangana",
    "degrees": [
      "LL.B"
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
    "category": "Judiciary",
    "officialUrl": "https://tshc.gov.in",
    "applyUrl": "https://tshc.gov.in",
    "minimumAge": 35,
    "maximumAge": 45,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Age varies by bar experience and category."
  },
  {
    "id": "ts-gram-sachivalayam",
    "name": "Telangana Grama Sachivalayam Recruitment",
    "organization": "Telangana Panchayat Raj and Rural Development Department",
    "level": "State Government",
    "state": "Telangana",
    "degrees": [
      "12th Pass",
      "Any Graduate"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination and Document Verification",
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
      "Written Examination and Document Verification"
    ],
    "category": "Rural Development Jobs",
    "officialUrl": "https://panchayatraj.cgg.gov.in",
    "applyUrl": "https://panchayatraj.cgg.gov.in",
    "minimumAge": 18,
    "maximumAge": 44,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Age varies by post and notification."
  },
  {
    "id": "ts-municipal-assistant",
    "name": "Telangana Municipal Assistant / Urban Local Bodies Recruitment",
    "organization": "Telangana Municipal Administration and Urban Development Department",
    "level": "State Government",
    "state": "Telangana",
    "degrees": [
      "12th Pass",
      "Any Graduate"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination and Document Verification",
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
      "Written Examination and Document Verification"
    ],
    "category": "Urban Development Jobs",
    "officialUrl": "https://municipaladmin.telangana.gov.in",
    "applyUrl": "https://municipaladmin.telangana.gov.in",
    "minimumAge": 18,
    "maximumAge": 44,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Age varies by post and notification."
  },
  {
    "id": "ts-anganwadi-worker",
    "name": "Telangana Anganwadi Worker / Helper Recruitment",
    "organization": "Telangana Women Development and Child Welfare Department",
    "level": "State Government",
    "state": "Telangana",
    "degrees": [
      "10th Pass",
      "12th Pass"
    ],
    "selection": "merit_based",
    "selectionProcess": "Merit-based selection and Document Verification",
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
      "Merit-based selection and Document Verification"
    ],
    "category": "Women & Child Development Jobs",
    "officialUrl": "https://wcd.cgg.gov.in",
    "applyUrl": "https://wcd.cgg.gov.in",
    "minimumAge": 18,
    "maximumAge": 44,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Age varies by post and district notification."
  },
  {
    "id": "ts-vidya-volunteer",
    "name": "Telangana Vidya Volunteer Recruitment",
    "organization": "Department of School Education, Telangana",
    "level": "State Government",
    "state": "Telangana",
    "degrees": [
      "12th Pass",
      "Any Graduate"
    ],
    "selection": "merit_based",
    "selectionProcess": "Merit-based selection and Document Verification",
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
      "Merit-based selection and Document Verification"
    ],
    "category": "Teaching",
    "officialUrl": "https://schooleducation.telangana.gov.in",
    "applyUrl": "https://schooleducation.telangana.gov.in",
    "minimumAge": 18,
    "maximumAge": 44,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Eligibility and age vary by district notification."
  },
  {
    "id": "kpsc-kas",
    "name": "Karnataka Administrative Service (KAS) Examination",
    "organization": "Karnataka Public Service Commission",
    "level": "State Government",
    "state": "Karnataka",
    "degrees": [
      "Any Graduate",
      "B.A",
      "B.Sc",
      "B.Com",
      "B.Tech",
      "MBBS",
      "LL.B"
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
    "category": "Karnataka Civil Services",
    "officialUrl": "https://kpsc.kar.nic.in",
    "applyUrl": "https://kpsc.kar.nic.in",
    "minimumAge": 21,
    "maximumAge": 35,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Age varies by category and post."
  },
  {
    "id": "kpsc-fda",
    "name": "Karnataka PSC First Division Assistant (FDA) Examination",
    "organization": "Karnataka Public Service Commission",
    "level": "State Government",
    "state": "Karnataka",
    "degrees": [
      "Any Graduate",
      "B.A",
      "B.Sc",
      "B.Com",
      "B.Tech",
      "MBBS",
      "LL.B"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination and Document Verification",
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
      "Written Examination and Document Verification"
    ],
    "category": "State Government Jobs",
    "officialUrl": "https://kpsc.kar.nic.in",
    "applyUrl": "https://kpsc.kar.nic.in",
    "minimumAge": 18,
    "maximumAge": 35,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "kpsc-sda",
    "name": "Karnataka PSC Second Division Assistant (SDA) Examination",
    "organization": "Karnataka Public Service Commission",
    "level": "State Government",
    "state": "Karnataka",
    "degrees": [
      "12th Pass"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination and Document Verification",
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
      "Written Examination and Document Verification"
    ],
    "category": "State Government Jobs",
    "officialUrl": "https://kpsc.kar.nic.in",
    "applyUrl": "https://kpsc.kar.nic.in",
    "minimumAge": 18,
    "maximumAge": 35,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "kpsc-junior-assistant",
    "name": "Karnataka PSC Junior Assistant Examination",
    "organization": "Karnataka Public Service Commission",
    "level": "State Government",
    "state": "Karnataka",
    "degrees": [
      "12th Pass",
      "Any Graduate"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination and Document Verification",
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
      "Written Examination and Document Verification"
    ],
    "category": "State Government Jobs",
    "officialUrl": "https://kpsc.kar.nic.in",
    "applyUrl": "https://kpsc.kar.nic.in",
    "minimumAge": 18,
    "maximumAge": 35,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "kpsc-assistant-controller",
    "name": "Karnataka PSC Assistant Controller / Assistant Director Examination",
    "organization": "Karnataka Public Service Commission",
    "level": "State Government",
    "state": "Karnataka",
    "degrees": [
      "Any Graduate",
      "B.A",
      "B.Sc",
      "B.Com",
      "B.Tech",
      "MBBS",
      "LL.B"
    ],
    "selection": "exam_and_interview",
    "selectionProcess": "Written Examination and Interview",
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
      "Written Examination and Interview"
    ],
    "category": "State Government Jobs",
    "officialUrl": "https://kpsc.kar.nic.in",
    "applyUrl": "https://kpsc.kar.nic.in",
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
    "id": "kpsc-group-c",
    "name": "Karnataka PSC Group C Non-Technical Posts",
    "organization": "Karnataka Public Service Commission",
    "level": "State Government",
    "state": "Karnataka",
    "degrees": [
      "12th Pass",
      "Any Graduate"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination and Document Verification",
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
      "Written Examination and Document Verification"
    ],
    "category": "State Government Jobs",
    "officialUrl": "https://kpsc.kar.nic.in",
    "applyUrl": "https://kpsc.kar.nic.in",
    "minimumAge": 18,
    "maximumAge": 35,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Age varies by post."
  },
  {
    "id": "kpsc-group-b",
    "name": "Karnataka PSC Group B Technical / Non-Technical Posts",
    "organization": "Karnataka Public Service Commission",
    "level": "State Government",
    "state": "Karnataka",
    "degrees": [
      "Any Graduate",
      "B.A",
      "B.Sc",
      "B.Com",
      "B.Tech",
      "MBBS",
      "LL.B"
    ],
    "selection": "exam_and_interview",
    "selectionProcess": "Written Examination and Interview",
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
      "Written Examination and Interview"
    ],
    "category": "State Government Jobs",
    "officialUrl": "https://kpsc.kar.nic.in",
    "applyUrl": "https://kpsc.kar.nic.in",
    "minimumAge": 18,
    "maximumAge": 35,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Age varies by post."
  },
  {
    "id": "kpsc-group-a",
    "name": "Karnataka PSC Group A Gazetted Probationers Examination",
    "organization": "Karnataka Public Service Commission",
    "level": "State Government",
    "state": "Karnataka",
    "degrees": [
      "Any Graduate",
      "B.A",
      "B.Sc",
      "B.Com",
      "B.Tech",
      "MBBS",
      "LL.B"
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
    "category": "Karnataka Civil Services",
    "officialUrl": "https://kpsc.kar.nic.in",
    "applyUrl": "https://kpsc.kar.nic.in",
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
    "id": "kpsc-assistant-engineer",
    "name": "Karnataka PSC Assistant Engineer Recruitment",
    "organization": "Karnataka Public Service Commission",
    "level": "State Government",
    "state": "Karnataka",
    "degrees": [
      "B.Tech",
      "B.E"
    ],
    "selection": "exam_and_interview",
    "selectionProcess": "Written Examination and Interview",
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
      "Written Examination and Interview"
    ],
    "category": "Engineering Jobs",
    "officialUrl": "https://kpsc.kar.nic.in",
    "applyUrl": "https://kpsc.kar.nic.in",
    "minimumAge": 18,
    "maximumAge": 35,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "kpsc-junior-engineer",
    "name": "Karnataka PSC Junior Engineer Recruitment",
    "organization": "Karnataka Public Service Commission",
    "level": "State Government",
    "state": "Karnataka",
    "degrees": [
      "Diploma",
      "B.Tech",
      "B.E"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination and Document Verification",
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
      "Written Examination and Document Verification"
    ],
    "category": "Engineering Jobs",
    "officialUrl": "https://kpsc.kar.nic.in",
    "applyUrl": "https://kpsc.kar.nic.in",
    "minimumAge": 18,
    "maximumAge": 35,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "kpsc-technical-posts",
    "name": "Karnataka PSC Technical Posts Recruitment",
    "organization": "Karnataka Public Service Commission",
    "level": "State Government",
    "state": "Karnataka",
    "degrees": [
      "Diploma",
      "B.Tech",
      "B.E",
      "Any Graduate"
    ],
    "selection": "exam_and_interview",
    "selectionProcess": "Written Examination, Skill Test if applicable, and Interview",
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
      "Written Examination, Skill Test if applicable, and Interview"
    ],
    "category": "Technical Jobs",
    "officialUrl": "https://kpsc.kar.nic.in",
    "applyUrl": "https://kpsc.kar.nic.in",
    "minimumAge": 18,
    "maximumAge": 35,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Age varies by post."
  },
  {
    "id": "kpsc-staff-nurse",
    "name": "Karnataka PSC Staff Nurse Recruitment",
    "organization": "Karnataka Public Service Commission",
    "level": "State Government",
    "state": "Karnataka",
    "degrees": [
      "B.Sc Nursing",
      "Diploma Nursing"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination and Document Verification",
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
      "Written Examination and Document Verification"
    ],
    "category": "Medical Jobs",
    "officialUrl": "https://kpsc.kar.nic.in",
    "applyUrl": "https://kpsc.kar.nic.in",
    "minimumAge": 18,
    "maximumAge": 35,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "kpsc-pharmacist",
    "name": "Karnataka PSC Pharmacist Recruitment",
    "organization": "Karnataka Public Service Commission",
    "level": "State Government",
    "state": "Karnataka",
    "degrees": [
      "D.Pharm",
      "B.Pharm"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination and Document Verification",
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
      "Written Examination and Document Verification"
    ],
    "category": "Medical Jobs",
    "officialUrl": "https://kpsc.kar.nic.in",
    "applyUrl": "https://kpsc.kar.nic.in",
    "minimumAge": 18,
    "maximumAge": 35,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "kpsc-medical-officer",
    "name": "Karnataka PSC Medical Officer Recruitment",
    "organization": "Karnataka Public Service Commission",
    "level": "State Government",
    "state": "Karnataka",
    "degrees": [
      "MBBS"
    ],
    "selection": "exam_and_interview",
    "selectionProcess": "Written Examination and Interview",
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
      "Written Examination and Interview"
    ],
    "category": "Medical Jobs",
    "officialUrl": "https://kpsc.kar.nic.in",
    "applyUrl": "https://kpsc.kar.nic.in",
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
    "id": "kpsc-lab-technician",
    "name": "Karnataka PSC Laboratory Technician Recruitment",
    "organization": "Karnataka Public Service Commission",
    "level": "State Government",
    "state": "Karnataka",
    "degrees": [
      "Diploma Medical Lab Technology",
      "B.Sc"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination and Document Verification",
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
      "Written Examination and Document Verification"
    ],
    "category": "Medical Jobs",
    "officialUrl": "https://kpsc.kar.nic.in",
    "applyUrl": "https://kpsc.kar.nic.in",
    "minimumAge": 18,
    "maximumAge": 35,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "karnataka-teacher-recruitment",
    "name": "Karnataka Department of School Education Teacher Recruitment",
    "organization": "Department of School Education and Literacy, Karnataka",
    "level": "State Government",
    "state": "Karnataka",
    "degrees": [
      "B.Ed",
      "D.El.Ed",
      "Any Graduate"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination and Document Verification",
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
      "Written Examination and Document Verification"
    ],
    "category": "Teaching",
    "officialUrl": "https://schooleducation.karnataka.gov.in",
    "applyUrl": "https://schooleducation.karnataka.gov.in",
    "minimumAge": 18,
    "maximumAge": 40,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Age varies by TGT, PGT, and primary teacher posts."
  },
  {
    "id": "karnataka-tet",
    "name": "Karnataka Teacher Eligibility Test (KARTET)",
    "organization": "Department of School Education and Literacy, Karnataka",
    "level": "State Government",
    "state": "Karnataka",
    "degrees": [
      "D.El.Ed",
      "B.Ed"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination",
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
      "Written Examination"
    ],
    "category": "Teaching",
    "officialUrl": "https://kartet.karnataka.gov.in",
    "applyUrl": "https://kartet.karnataka.gov.in",
    "minimumAge": 18,
    "maximumAge": null,
    "ageRelaxation": {
      "OBC": 0,
      "SC_ST": 0,
      "PwBD": 0
    },
    "ageNote": "No upper age limit; verify notification."
  },
  {
    "id": "karnataka-set",
    "name": "Karnataka State Eligibility Test (KSET)",
    "organization": "Karnataka Examinations Authority",
    "level": "State Government",
    "state": "Karnataka",
    "degrees": [
      "Postgraduate"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination",
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
      "Written Examination"
    ],
    "category": "Teaching & Research",
    "officialUrl": "https://kset.uni-mysore.ac.in",
    "applyUrl": "https://kset.uni-mysore.ac.in",
    "minimumAge": null,
    "maximumAge": null,
    "ageRelaxation": {
      "OBC": 0,
      "SC_ST": 0,
      "PwBD": 0
    },
    "ageNote": "No age limit."
  },
  {
    "id": "kea-kcet",
    "name": "Karnataka Common Entrance Test (KCET)",
    "organization": "Karnataka Examinations Authority",
    "level": "State Government",
    "state": "Karnataka",
    "degrees": [
      "10+2 / Equivalent"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination and Counselling",
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
      "Written Examination and Counselling"
    ],
    "category": "State Entrance",
    "officialUrl": "https://kea.kar.nic.in",
    "applyUrl": "https://kea.kar.nic.in",
    "minimumAge": null,
    "maximumAge": null,
    "ageRelaxation": {
      "OBC": 0,
      "SC_ST": 0,
      "PwBD": 0
    },
    "ageNote": "No fixed age limit; course-specific rules apply."
  },
  {
    "id": "kea-comedk",
    "name": "COMEDK UGET",
    "organization": "Consortium of Medical, Engineering and Dental Colleges of Karnataka",
    "level": "State Government",
    "state": "Karnataka",
    "degrees": [
      "10+2 / Equivalent"
    ],
    "selection": "exam_only",
    "selectionProcess": "Computer Based Test and Counselling",
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
      "Computer Based Test and Counselling"
    ],
    "category": "State Entrance",
    "officialUrl": "https://comedk.org",
    "applyUrl": "https://comedk.org",
    "minimumAge": null,
    "maximumAge": null,
    "ageRelaxation": {
      "OBC": 0,
      "SC_ST": 0,
      "PwBD": 0
    },
    "ageNote": "No fixed age limit; verify admission notification."
  },
  {
    "id": "karnataka-police-constable",
    "name": "Karnataka State Police Constable Recruitment",
    "organization": "Karnataka State Police",
    "level": "State Government",
    "state": "Karnataka",
    "degrees": [
      "12th Pass"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination, Physical Efficiency Test, Endurance Test, and Medical Examination",
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
      "Written Examination, Physical Efficiency Test, Endurance Test, and Medical Examination"
    ],
    "category": "Police Recruitment",
    "officialUrl": "https://ksp-recruitment.in",
    "applyUrl": "https://ksp-recruitment.in",
    "minimumAge": 18,
    "maximumAge": 25,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Age varies by gender, category, and post."
  },
  {
    "id": "karnataka-police-si",
    "name": "Karnataka State Police Sub-Inspector Recruitment",
    "organization": "Karnataka State Police",
    "level": "State Government",
    "state": "Karnataka",
    "degrees": [
      "Any Graduate",
      "B.A",
      "B.Sc",
      "B.Com",
      "B.Tech",
      "MBBS",
      "LL.B"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination, Physical Efficiency Test, and Medical Examination",
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
      "Written Examination, Physical Efficiency Test, and Medical Examination"
    ],
    "category": "Police Recruitment",
    "officialUrl": "https://ksp-recruitment.in",
    "applyUrl": "https://ksp-recruitment.in",
    "minimumAge": 21,
    "maximumAge": 28,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Age varies by gender and category."
  },
  {
    "id": "karnataka-police-psi-technical",
    "name": "Karnataka State Police Technical Sub-Inspector Recruitment",
    "organization": "Karnataka State Police",
    "level": "State Government",
    "state": "Karnataka",
    "degrees": [
      "Diploma",
      "B.Tech",
      "B.E"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination, Physical Test, and Document Verification",
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
      "Written Examination, Physical Test, and Document Verification"
    ],
    "category": "Police Recruitment",
    "officialUrl": "https://ksp-recruitment.in",
    "applyUrl": "https://ksp-recruitment.in",
    "minimumAge": 18,
    "maximumAge": 30,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Age varies by technical post."
  },
  {
    "id": "karnataka-forest-guard",
    "name": "Karnataka Forest Department Forest Guard Recruitment",
    "organization": "Karnataka Forest Department",
    "level": "State Government",
    "state": "Karnataka",
    "degrees": [
      "12th Pass"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination, Physical Test, and Medical Examination",
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
      "Written Examination, Physical Test, and Medical Examination"
    ],
    "category": "Forest Services",
    "officialUrl": "https://aranya.gov.in",
    "applyUrl": "https://aranya.gov.in",
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
    "id": "karnataka-forest-deputy-ranger",
    "name": "Karnataka Forest Department Deputy Range Forest Officer Recruitment",
    "organization": "Karnataka Forest Department",
    "level": "State Government",
    "state": "Karnataka",
    "degrees": [
      "B.Sc Forestry",
      "Any Graduate"
    ],
    "selection": "exam_and_interview",
    "selectionProcess": "Written Examination, Physical Test, and Interview",
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
      "Written Examination, Physical Test, and Interview"
    ],
    "category": "Forest Services",
    "officialUrl": "https://aranya.gov.in",
    "applyUrl": "https://aranya.gov.in",
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
    "id": "karnataka-high-court-civil-judge",
    "name": "Karnataka Civil Judge Recruitment Examination",
    "organization": "Karnataka High Court",
    "level": "State Government",
    "state": "Karnataka",
    "degrees": [
      "LL.B"
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
    "category": "Judiciary",
    "officialUrl": "https://karnatakajudiciary.karnataka.gov.in",
    "applyUrl": "https://karnatakajudiciary.karnataka.gov.in",
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
    "id": "karnataka-district-judge",
    "name": "Karnataka District Judge Recruitment Examination",
    "organization": "Karnataka High Court",
    "level": "State Government",
    "state": "Karnataka",
    "degrees": [
      "LL.B"
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
    "category": "Judiciary",
    "officialUrl": "https://karnatakajudiciary.karnataka.gov.in",
    "applyUrl": "https://karnatakajudiciary.karnataka.gov.in",
    "minimumAge": 35,
    "maximumAge": 45,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Age varies by bar experience and category."
  },
  {
    "id": "karnataka-bank-recruitment",
    "name": "Karnataka State Co-operative Bank Recruitment",
    "organization": "Karnataka State Co-operative Bank / KSC Bank",
    "level": "State Government",
    "state": "Karnataka",
    "degrees": [
      "Any Graduate",
      "B.A",
      "B.Sc",
      "B.Com",
      "B.Tech",
      "MBBS",
      "LL.B"
    ],
    "selection": "exam_and_interview",
    "selectionProcess": "Written Examination and Interview",
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
      "Written Examination and Interview"
    ],
    "category": "Banking / State Financial Institutions",
    "officialUrl": "https://karnatakabank.com",
    "applyUrl": "https://karnatakabank.com",
    "minimumAge": 21,
    "maximumAge": 30,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Age varies by post and notification."
  },
  {
    "id": "karnataka-village-accountant",
    "name": "Karnataka Village Accountant Recruitment",
    "organization": "Karnataka Revenue Department",
    "level": "State Government",
    "state": "Karnataka",
    "degrees": [
      "12th Pass"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination and Document Verification",
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
      "Written Examination and Document Verification"
    ],
    "category": "State Government Jobs",
    "officialUrl": "https://revenue.karnataka.gov.in",
    "applyUrl": "https://revenue.karnataka.gov.in",
    "minimumAge": 18,
    "maximumAge": 35,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "karnataka-revenue-inspector",
    "name": "Karnataka Revenue Inspector Recruitment",
    "organization": "Karnataka Revenue Department",
    "level": "State Government",
    "state": "Karnataka",
    "degrees": [
      "Any Graduate",
      "B.A",
      "B.Sc",
      "B.Com",
      "B.Tech",
      "MBBS",
      "LL.B"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination and Document Verification",
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
      "Written Examination and Document Verification"
    ],
    "category": "State Government Jobs",
    "officialUrl": "https://revenue.karnataka.gov.in",
    "applyUrl": "https://revenue.karnataka.gov.in",
    "minimumAge": 18,
    "maximumAge": 35,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "karnataka-panchayat-development-officer",
    "name": "Karnataka Panchayat Development Officer (PDO) Recruitment",
    "organization": "Karnataka Examinations Authority / Rural Development and Panchayat Raj Department",
    "level": "State Government",
    "state": "Karnataka",
    "degrees": [
      "Any Graduate",
      "B.A",
      "B.Sc",
      "B.Com",
      "B.Tech",
      "MBBS",
      "LL.B"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination and Document Verification",
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
      "Written Examination and Document Verification"
    ],
    "category": "Rural Development Jobs",
    "officialUrl": "https://kea.kar.nic.in",
    "applyUrl": "https://kea.kar.nic.in",
    "minimumAge": 18,
    "maximumAge": 35,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "karnataka-panchayat-secretary",
    "name": "Karnataka Panchayat Secretary / Grama Panchayat Recruitment",
    "organization": "Karnataka Rural Development and Panchayat Raj Department",
    "level": "State Government",
    "state": "Karnataka",
    "degrees": [
      "12th Pass",
      "Any Graduate"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination and Document Verification",
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
      "Written Examination and Document Verification"
    ],
    "category": "Rural Development Jobs",
    "officialUrl": "https://panchamitra.karnataka.gov.in",
    "applyUrl": "https://panchamitra.karnataka.gov.in",
    "minimumAge": 18,
    "maximumAge": 35,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Age varies by post and notification."
  },
  {
    "id": "kerala-psc-ldc",
    "name": "Kerala PSC Lower Division Clerk (LDC) Examination",
    "organization": "Kerala Public Service Commission",
    "level": "State Government",
    "state": "Kerala",
    "degrees": [
      "12th Pass"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination, Typing Test if applicable, and Document Verification",
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
      "Written Examination, Typing Test if applicable, and Document Verification"
    ],
    "category": "State Government Jobs",
    "officialUrl": "https://www.keralapsc.gov.in",
    "applyUrl": "https://www.keralapsc.gov.in",
    "minimumAge": 18,
    "maximumAge": 36,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Age varies by community and department."
  },
  {
    "id": "kerala-psc-udc",
    "name": "Kerala PSC Upper Division Clerk (UDC) Examination",
    "organization": "Kerala Public Service Commission",
    "level": "State Government",
    "state": "Kerala",
    "degrees": [
      "Any Graduate",
      "B.A",
      "B.Sc",
      "B.Com",
      "B.Tech",
      "MBBS",
      "LL.B"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination and Document Verification",
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
      "Written Examination and Document Verification"
    ],
    "category": "State Government Jobs",
    "officialUrl": "https://www.keralapsc.gov.in",
    "applyUrl": "https://www.keralapsc.gov.in",
    "minimumAge": 18,
    "maximumAge": 36,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "kerala-psc-deputy-collector",
    "name": "Kerala PSC Deputy Collector Examination",
    "organization": "Kerala Public Service Commission",
    "level": "State Government",
    "state": "Kerala",
    "degrees": [
      "Any Graduate",
      "B.A",
      "B.Sc",
      "B.Com",
      "B.Tech",
      "MBBS",
      "LL.B"
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
    "category": "Kerala Civil Services",
    "officialUrl": "https://www.keralapsc.gov.in",
    "applyUrl": "https://www.keralapsc.gov.in",
    "minimumAge": 21,
    "maximumAge": 36,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "kerala-psc-assistant",
    "name": "Kerala PSC Assistant / Company / Corporation Assistant Examination",
    "organization": "Kerala Public Service Commission",
    "level": "State Government",
    "state": "Kerala",
    "degrees": [
      "Any Graduate",
      "B.A",
      "B.Sc",
      "B.Com",
      "B.Tech",
      "MBBS",
      "LL.B"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination and Document Verification",
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
      "Written Examination and Document Verification"
    ],
    "category": "State Government Jobs",
    "officialUrl": "https://www.keralapsc.gov.in",
    "applyUrl": "https://www.keralapsc.gov.in",
    "minimumAge": 18,
    "maximumAge": 36,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "kerala-psc-last-grade",
    "name": "Kerala PSC Last Grade Servants Examination",
    "organization": "Kerala Public Service Commission",
    "level": "State Government",
    "state": "Kerala",
    "degrees": [
      "10th Pass"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination and Document Verification",
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
      "Written Examination and Document Verification"
    ],
    "category": "State Government Jobs",
    "officialUrl": "https://www.keralapsc.gov.in",
    "applyUrl": "https://www.keralapsc.gov.in",
    "minimumAge": 18,
    "maximumAge": 36,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "kerala-psc-police-constable",
    "name": "Kerala PSC Police Constable Recruitment",
    "organization": "Kerala Public Service Commission",
    "level": "State Government",
    "state": "Kerala",
    "degrees": [
      "12th Pass"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination, Physical Efficiency Test, and Medical Examination",
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
      "Written Examination, Physical Efficiency Test, and Medical Examination"
    ],
    "category": "Police Recruitment",
    "officialUrl": "https://www.keralapsc.gov.in",
    "applyUrl": "https://www.keralapsc.gov.in",
    "minimumAge": 18,
    "maximumAge": 26,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Age varies by gender and community."
  },
  {
    "id": "kerala-psc-sub-inspector",
    "name": "Kerala PSC Sub Inspector of Police Recruitment",
    "organization": "Kerala Public Service Commission",
    "level": "State Government",
    "state": "Kerala",
    "degrees": [
      "Any Graduate",
      "B.A",
      "B.Sc",
      "B.Com",
      "B.Tech",
      "MBBS",
      "LL.B"
    ],
    "selection": "exam_and_interview",
    "selectionProcess": "Written Examination, Physical Efficiency Test, and Interview",
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
      "Written Examination, Physical Efficiency Test, and Interview"
    ],
    "category": "Police Recruitment",
    "officialUrl": "https://www.keralapsc.gov.in",
    "applyUrl": "https://www.keralapsc.gov.in",
    "minimumAge": 20,
    "maximumAge": 30,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Age varies by gender and community."
  },
  {
    "id": "kerala-psc-excise-inspector",
    "name": "Kerala PSC Excise Inspector Recruitment",
    "organization": "Kerala Public Service Commission",
    "level": "State Government",
    "state": "Kerala",
    "degrees": [
      "Any Graduate",
      "B.A",
      "B.Sc",
      "B.Com",
      "B.Tech",
      "MBBS",
      "LL.B"
    ],
    "selection": "exam_and_interview",
    "selectionProcess": "Written Examination, Physical Efficiency Test, and Interview",
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
      "Written Examination, Physical Efficiency Test, and Interview"
    ],
    "category": "State Government Jobs",
    "officialUrl": "https://www.keralapsc.gov.in",
    "applyUrl": "https://www.keralapsc.gov.in",
    "minimumAge": 20,
    "maximumAge": 32,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "kerala-psc-fireman",
    "name": "Kerala PSC Fireman / Fire and Rescue Services Recruitment",
    "organization": "Kerala Public Service Commission",
    "level": "State Government",
    "state": "Kerala",
    "degrees": [
      "12th Pass"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination, Physical Efficiency Test, and Medical Examination",
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
      "Written Examination, Physical Efficiency Test, and Medical Examination"
    ],
    "category": "Fire & Rescue Services",
    "officialUrl": "https://www.keralapsc.gov.in",
    "applyUrl": "https://www.keralapsc.gov.in",
    "minimumAge": 18,
    "maximumAge": 26,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Age varies by gender and category."
  },
  {
    "id": "kerala-psc-prison-warder",
    "name": "Kerala PSC Prison Warder Recruitment",
    "organization": "Kerala Public Service Commission",
    "level": "State Government",
    "state": "Kerala",
    "degrees": [
      "12th Pass"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination, Physical Efficiency Test, and Medical Examination",
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
      "Written Examination, Physical Efficiency Test, and Medical Examination"
    ],
    "category": "Police & Prison Services",
    "officialUrl": "https://www.keralapsc.gov.in",
    "applyUrl": "https://www.keralapsc.gov.in",
    "minimumAge": 18,
    "maximumAge": 26,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "kerala-psc-beat-forest-officer",
    "name": "Kerala PSC Beat Forest Officer Recruitment",
    "organization": "Kerala Public Service Commission",
    "level": "State Government",
    "state": "Kerala",
    "degrees": [
      "12th Pass"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination, Physical Efficiency Test, and Medical Examination",
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
      "Written Examination, Physical Efficiency Test, and Medical Examination"
    ],
    "category": "Forest Services",
    "officialUrl": "https://www.keralapsc.gov.in",
    "applyUrl": "https://www.keralapsc.gov.in",
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
    "id": "kerala-psc-forest-guard",
    "name": "Kerala PSC Forest Guard Recruitment",
    "organization": "Kerala Public Service Commission",
    "level": "State Government",
    "state": "Kerala",
    "degrees": [
      "12th Pass"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination, Physical Efficiency Test, and Medical Examination",
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
      "Written Examination, Physical Efficiency Test, and Medical Examination"
    ],
    "category": "Forest Services",
    "officialUrl": "https://www.keralapsc.gov.in",
    "applyUrl": "https://www.keralapsc.gov.in",
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
    "id": "kerala-psc-assistant-professor",
    "name": "Kerala PSC Assistant Professor / Lecturer Recruitment",
    "organization": "Kerala Public Service Commission",
    "level": "State Government",
    "state": "Kerala",
    "degrees": [
      "Postgraduate"
    ],
    "selection": "exam_and_interview",
    "selectionProcess": "Written Examination, Interview, and Document Verification",
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
      "Written Examination, Interview, and Document Verification"
    ],
    "category": "Teaching",
    "officialUrl": "https://www.keralapsc.gov.in",
    "applyUrl": "https://www.keralapsc.gov.in",
    "minimumAge": null,
    "maximumAge": null,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Age varies by subject, department, and notification."
  },
  {
    "id": "kerala-psc-high-school-assistant",
    "name": "Kerala PSC High School Assistant Recruitment",
    "organization": "Kerala Public Service Commission",
    "level": "State Government",
    "state": "Kerala",
    "degrees": [
      "B.Ed",
      "PG"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination and Document Verification",
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
      "Written Examination and Document Verification"
    ],
    "category": "Teaching",
    "officialUrl": "https://www.keralapsc.gov.in",
    "applyUrl": "https://www.keralapsc.gov.in",
    "minimumAge": 18,
    "maximumAge": 40,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Age varies by subject and community."
  },
  {
    "id": "kerala-psc-lp-school-assistant",
    "name": "Kerala PSC Lower Primary School Assistant Recruitment",
    "organization": "Kerala Public Service Commission",
    "level": "State Government",
    "state": "Kerala",
    "degrees": [
      "D.El.Ed",
      "TTC"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination and Document Verification",
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
      "Written Examination and Document Verification"
    ],
    "category": "Teaching",
    "officialUrl": "https://www.keralapsc.gov.in",
    "applyUrl": "https://www.keralapsc.gov.in",
    "minimumAge": 18,
    "maximumAge": 40,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "kerala-psc-up-school-assistant",
    "name": "Kerala PSC Upper Primary School Assistant Recruitment",
    "organization": "Kerala Public Service Commission",
    "level": "State Government",
    "state": "Kerala",
    "degrees": [
      "B.Ed",
      "D.El.Ed"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination and Document Verification",
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
      "Written Examination and Document Verification"
    ],
    "category": "Teaching",
    "officialUrl": "https://www.keralapsc.gov.in",
    "applyUrl": "https://www.keralapsc.gov.in",
    "minimumAge": 18,
    "maximumAge": 40,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "kerala-psc-non-teaching-staff",
    "name": "Kerala PSC Non-Teaching Staff Recruitment",
    "organization": "Kerala Public Service Commission",
    "level": "State Government",
    "state": "Kerala",
    "degrees": [
      "12th Pass",
      "Any Graduate"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination and Document Verification",
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
      "Written Examination and Document Verification"
    ],
    "category": "State Government Jobs",
    "officialUrl": "https://www.keralapsc.gov.in",
    "applyUrl": "https://www.keralapsc.gov.in",
    "minimumAge": 18,
    "maximumAge": 36,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Age varies by post."
  },
  {
    "id": "kerala-psc-staff-nurse",
    "name": "Kerala PSC Staff Nurse Recruitment",
    "organization": "Kerala Public Service Commission",
    "level": "State Government",
    "state": "Kerala",
    "degrees": [
      "B.Sc Nursing",
      "Diploma Nursing"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination and Document Verification",
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
      "Written Examination and Document Verification"
    ],
    "category": "Medical Jobs",
    "officialUrl": "https://www.keralapsc.gov.in",
    "applyUrl": "https://www.keralapsc.gov.in",
    "minimumAge": 18,
    "maximumAge": 36,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "kerala-psc-pharmacist",
    "name": "Kerala PSC Pharmacist Recruitment",
    "organization": "Kerala Public Service Commission",
    "level": "State Government",
    "state": "Kerala",
    "degrees": [
      "D.Pharm",
      "B.Pharm"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination and Document Verification",
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
      "Written Examination and Document Verification"
    ],
    "category": "Medical Jobs",
    "officialUrl": "https://www.keralapsc.gov.in",
    "applyUrl": "https://www.keralapsc.gov.in",
    "minimumAge": 18,
    "maximumAge": 36,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "kerala-psc-lab-technician",
    "name": "Kerala PSC Laboratory Technician Recruitment",
    "organization": "Kerala Public Service Commission",
    "level": "State Government",
    "state": "Kerala",
    "degrees": [
      "Diploma Medical Lab Technology",
      "B.Sc"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination and Document Verification",
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
      "Written Examination and Document Verification"
    ],
    "category": "Medical Jobs",
    "officialUrl": "https://www.keralapsc.gov.in",
    "applyUrl": "https://www.keralapsc.gov.in",
    "minimumAge": 18,
    "maximumAge": 36,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "kerala-psc-medical-officer",
    "name": "Kerala PSC Medical Officer Recruitment",
    "organization": "Kerala Public Service Commission",
    "level": "State Government",
    "state": "Kerala",
    "degrees": [
      "MBBS"
    ],
    "selection": "exam_and_interview",
    "selectionProcess": "Written Examination and Interview",
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
      "Written Examination and Interview"
    ],
    "category": "Medical Jobs",
    "officialUrl": "https://www.keralapsc.gov.in",
    "applyUrl": "https://www.keralapsc.gov.in",
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
    "id": "kerala-psc-assistant-engineer",
    "name": "Kerala PSC Assistant Engineer Recruitment",
    "organization": "Kerala Public Service Commission",
    "level": "State Government",
    "state": "Kerala",
    "degrees": [
      "B.Tech",
      "B.E"
    ],
    "selection": "exam_and_interview",
    "selectionProcess": "Written Examination and Interview",
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
      "Written Examination and Interview"
    ],
    "category": "Engineering Jobs",
    "officialUrl": "https://www.keralapsc.gov.in",
    "applyUrl": "https://www.keralapsc.gov.in",
    "minimumAge": 18,
    "maximumAge": 36,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "kerala-psc-overseer",
    "name": "Kerala PSC Overseer / Junior Engineer Recruitment",
    "organization": "Kerala Public Service Commission",
    "level": "State Government",
    "state": "Kerala",
    "degrees": [
      "Diploma",
      "B.Tech",
      "B.E"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination and Document Verification",
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
      "Written Examination and Document Verification"
    ],
    "category": "Engineering Jobs",
    "officialUrl": "https://www.keralapsc.gov.in",
    "applyUrl": "https://www.keralapsc.gov.in",
    "minimumAge": 18,
    "maximumAge": 36,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "kerala-psc-tradesman",
    "name": "Kerala PSC Tradesman Recruitment",
    "organization": "Kerala Public Service Commission",
    "level": "State Government",
    "state": "Kerala",
    "degrees": [
      "10th Pass",
      "ITI",
      "Diploma"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination, Trade Test, and Document Verification",
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
      "Written Examination, Trade Test, and Document Verification"
    ],
    "category": "Technical Jobs",
    "officialUrl": "https://www.keralapsc.gov.in",
    "applyUrl": "https://www.keralapsc.gov.in",
    "minimumAge": 18,
    "maximumAge": 36,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Age varies by trade."
  },
  {
    "id": "kerala-psc-typist",
    "name": "Kerala PSC Typist / Clerk Typist Examination",
    "organization": "Kerala Public Service Commission",
    "level": "State Government",
    "state": "Kerala",
    "degrees": [
      "12th Pass"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination and Typing Test",
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
      "Written Examination and Typing Test"
    ],
    "category": "State Government Jobs",
    "officialUrl": "https://www.keralapsc.gov.in",
    "applyUrl": "https://www.keralapsc.gov.in",
    "minimumAge": 18,
    "maximumAge": 36,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "kerala-psc-stenographer",
    "name": "Kerala PSC Stenographer Examination",
    "organization": "Kerala Public Service Commission",
    "level": "State Government",
    "state": "Kerala",
    "degrees": [
      "12th Pass",
      "Any Graduate"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination and Shorthand / Typing Test",
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
      "Written Examination and Shorthand / Typing Test"
    ],
    "category": "State Government Jobs",
    "officialUrl": "https://www.keralapsc.gov.in",
    "applyUrl": "https://www.keralapsc.gov.in",
    "minimumAge": 18,
    "maximumAge": 36,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "kerala-psc-driver",
    "name": "Kerala PSC Driver Recruitment",
    "organization": "Kerala Public Service Commission",
    "level": "State Government",
    "state": "Kerala",
    "degrees": [
      "10th Pass",
      "12th Pass"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination, Driving Test, and Medical Examination",
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
      "Written Examination, Driving Test, and Medical Examination"
    ],
    "category": "State Government Jobs",
    "officialUrl": "https://www.keralapsc.gov.in",
    "applyUrl": "https://www.keralapsc.gov.in",
    "minimumAge": 18,
    "maximumAge": 36,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Age varies by vehicle class and department."
  },
  {
    "id": "kerala-psc-village-extension-officer",
    "name": "Kerala PSC Village Extension Officer (VEO) Examination",
    "organization": "Kerala Public Service Commission",
    "level": "State Government",
    "state": "Kerala",
    "degrees": [
      "12th Pass"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination and Document Verification",
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
      "Written Examination and Document Verification"
    ],
    "category": "State Government Jobs",
    "officialUrl": "https://www.keralapsc.gov.in",
    "applyUrl": "https://www.keralapsc.gov.in",
    "minimumAge": 18,
    "maximumAge": 36,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "kerala-psc-secretariat-assistant",
    "name": "Kerala PSC Secretariat Assistant Examination",
    "organization": "Kerala Public Service Commission",
    "level": "State Government",
    "state": "Kerala",
    "degrees": [
      "Any Graduate",
      "B.A",
      "B.Sc",
      "B.Com",
      "B.Tech",
      "MBBS",
      "LL.B"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination and Document Verification",
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
      "Written Examination and Document Verification"
    ],
    "category": "Kerala Secretariat Jobs",
    "officialUrl": "https://www.keralapsc.gov.in",
    "applyUrl": "https://www.keralapsc.gov.in",
    "minimumAge": 18,
    "maximumAge": 36,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "kerala-psc-university-assistant",
    "name": "Kerala PSC University Assistant Examination",
    "organization": "Kerala Public Service Commission",
    "level": "State Government",
    "state": "Kerala",
    "degrees": [
      "Any Graduate",
      "B.A",
      "B.Sc",
      "B.Com",
      "B.Tech",
      "MBBS",
      "LL.B"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination and Document Verification",
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
      "Written Examination and Document Verification"
    ],
    "category": "University Jobs",
    "officialUrl": "https://www.keralapsc.gov.in",
    "applyUrl": "https://www.keralapsc.gov.in",
    "minimumAge": 18,
    "maximumAge": 36,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Verify the official notification for the exact age limit."
  },
  {
    "id": "kerala-psc-degree-level",
    "name": "Kerala PSC Degree Level Examinations",
    "organization": "Kerala Public Service Commission",
    "level": "State Government",
    "state": "Kerala",
    "degrees": [
      "Any Graduate",
      "B.A",
      "B.Sc",
      "B.Com",
      "B.Tech",
      "MBBS",
      "LL.B"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination and Document Verification",
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
      "Written Examination and Document Verification"
    ],
    "category": "State Government Jobs",
    "officialUrl": "https://www.keralapsc.gov.in",
    "applyUrl": "https://www.keralapsc.gov.in",
    "minimumAge": 18,
    "maximumAge": 36,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Covers multiple degree-level posts notified by Kerala PSC."
  },
  {
    "id": "kerala-psc-12th-level",
    "name": "Kerala PSC 12th Level Examinations",
    "organization": "Kerala Public Service Commission",
    "level": "State Government",
    "state": "Kerala",
    "degrees": [
      "12th Pass"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination and Document Verification",
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
      "Written Examination and Document Verification"
    ],
    "category": "State Government Jobs",
    "officialUrl": "https://www.keralapsc.gov.in",
    "applyUrl": "https://www.keralapsc.gov.in",
    "minimumAge": 18,
    "maximumAge": 36,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Covers multiple higher-secondary-level posts notified by Kerala PSC."
  },
  {
    "id": "kerala-psc-10th-level",
    "name": "Kerala PSC 10th Level Examinations",
    "organization": "Kerala Public Service Commission",
    "level": "State Government",
    "state": "Kerala",
    "degrees": [
      "10th Pass"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination and Document Verification",
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
      "Written Examination and Document Verification"
    ],
    "category": "State Government Jobs",
    "officialUrl": "https://www.keralapsc.gov.in",
    "applyUrl": "https://www.keralapsc.gov.in",
    "minimumAge": 18,
    "maximumAge": 36,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Covers multiple matriculation-level posts notified by Kerala PSC."
  },
  {
    "id": "kerala-set",
    "name": "Kerala State Eligibility Test (Kerala SET)",
    "organization": "Commissioner for Entrance Examinations, Kerala",
    "level": "State Government",
    "state": "Kerala",
    "degrees": [
      "Postgraduate"
    ],
    "selection": "exam_only",
    "selectionProcess": "Written Examination",
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
      "Written Examination"
    ],
    "category": "Teaching & Research",
    "officialUrl": "https://lbscentre.kerala.gov.in",
    "applyUrl": "https://lbscentre.kerala.gov.in",
    "minimumAge": null,
    "maximumAge": null,
    "ageRelaxation": {
      "OBC": 0,
      "SC_ST": 0,
      "PwBD": 0
    },
    "ageNote": "No age limit."
  },
  {
    "id": "keam",
    "name": "Kerala Engineering Architecture Medical (KEAM)",
    "organization": "Commissioner for Entrance Examinations, Kerala",
    "level": "State Government",
    "state": "Kerala",
    "degrees": [
      "10+2 / Equivalent"
    ],
    "selection": "exam_only",
    "selectionProcess": "Computer Based Test and Counselling",
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
      "Computer Based Test and Counselling"
    ],
    "category": "State Entrance",
    "officialUrl": "https://cee.kerala.gov.in",
    "applyUrl": "https://cee.kerala.gov.in",
    "minimumAge": 17,
    "maximumAge": null,
    "ageRelaxation": {
      "OBC": 0,
      "SC_ST": 0,
      "PwBD": 0
    },
    "ageNote": "Minimum age 17; course-specific rules apply."
  },
  {
    "id": "kerala-judicial-service",
    "name": "Kerala Judicial Service Examination",
    "organization": "Kerala High Court / Kerala Public Service Commission",
    "level": "State Government",
    "state": "Kerala",
    "degrees": [
      "LL.B"
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
    "category": "Judiciary",
    "officialUrl": "https://hckerala.gov.in",
    "applyUrl": "https://hckerala.gov.in",
    "minimumAge": 21,
    "maximumAge": 35,
    "ageRelaxation": {
      "OBC": 3,
      "SC_ST": 5,
      "PwBD": 10
    },
    "ageNote": "Age varies by bar experience and category."
  }
];

export default SOUTH_STATE_EXAMS;

