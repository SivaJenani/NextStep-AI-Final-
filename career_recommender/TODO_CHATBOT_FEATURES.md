# Chatbot Unique Features - Implementation Plan

## Phase 1: Core Features (Focus First)

### 1. Dynamic Quick Prompts ✅
- Fetch user's profile data to generate relevant quick prompts
- Show prompts based on user's role, skills, and gaps
- **File**: `frontend/src/pages/ChatbotPage.jsx`

### 2. Smart Follow-up Suggestions ✅
- Backend returns suggested next questions in the response
- Frontend displays as clickable suggestion chips
- **Files**: `backend/main.py`, `frontend/src/pages/ChatbotPage.jsx`

### 3. Rich Markdown Responses ✅
- Parse and render markdown in AI responses
- Support bold, lists, code blocks, tables
- **File**: `frontend/src/pages/ChatbotPage.jsx`

---

## Status: COMPLETED

## Features Implemented:

### Backend (main.py):
- Added `_generate_suggestions()` function that generates intelligent follow-up questions based on the user's question topic
- Updated `generate_openai_chat_response()` to return 3 values: (answer, model, suggestions)
- Updated `/chatbot/ask` endpoint to pass suggestions in response

### Frontend (ChatbotPage.jsx):
- **Dynamic Quick Prompts**: `getQuickPrompts()` generates profile-specific prompts using user's desired_role, domain, and skills
- **Smart Follow-up Suggestions**: Displays suggestions returned from backend as clickable chips after each AI response
- **Rich Markdown Rendering**: Uses `react-markdown` to render AI responses with proper formatting (bold, lists, code blocks)

### Schema (schemas.py):
- Verified `suggestions` field already exists in `ChatbotResponse` model

## Next Steps:
- Test end-to-end to verify all features work together
