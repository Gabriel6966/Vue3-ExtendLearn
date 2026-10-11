## 2024-05-20 - Empty states in global layouts
**Learning:** Avoid hardcoded hex colors for global layouts. Plain text elements like empty states using heading tags (`<h3>`) explicitly inherit `var(--color-heading)`, preserving correct text contrast in dark mode.
**Action:** When adding simple empty states without custom styling, rely on heading tags to ensure they inherit correct semantic CSS variables for dark mode compatibility.
