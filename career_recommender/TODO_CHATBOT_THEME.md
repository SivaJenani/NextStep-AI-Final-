# Chatbot Theme Differentiation

## Plan:
- [ ] Update AppShell.jsx: Remove chatbot-specific overrides (w-screen pb-0), use standard layout with slate theme
- [ ] ChatbotPage.jsx: Ensure proper flex integration within AppShell main (remove absolute grid h-screen)
- [ ] Test theme consistency across pages

## Steps:
- [x] Step 1: Revert/Adjust AppShell chatbot padding to standard py-4
- [x] Step 2: Modify ChatbotPage to standard page structure (flex-1 overflow-hidden)
- [ ] Step 3: Verify slate bg theme applies correctly
- [ ] Step 4: Test navigation and responsive behavior
