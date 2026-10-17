## 2024-10-24 - Semantic Empty States for Dark Mode
**Learning:** When adding plain text empty states to Vue components without custom CSS, standard HTML headings (like <h3>) should be used. They explicitly inherit the var(--color-heading) CSS variable, ensuring text remains visible in dark mode.
**Action:** Always use native heading tags for plain text empty states.
