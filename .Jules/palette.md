## 2024-05-19 - Dark mode text contrast fix
**Learning:** The `#layout` element in `App.vue` hardcodes the text color `#2c3e50`, overriding dark mode styles and causing poor contrast on dark backgrounds. Heading tags are unaffected because they inherit `var(--color-heading)` explicitly, but normal text (`<div>`, `<span>`) fails contrast checks.
**Action:** Always use semantic variables like `var(--color-text)` instead of hardcoded hex values in global layout containers, or use appropriate heading tags when adding plain text elements.
