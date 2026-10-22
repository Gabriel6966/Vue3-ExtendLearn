## 2024-10-22 - Use headings for empty states
**Learning:** In the real-world-vue project, plain text elements like empty states need heading tags (like `<h3>`) to inherit `var(--color-heading)` and ensure proper text contrast in dark mode without needing custom CSS.
**Action:** Always wrap empty state messages in a heading tag rather than a `<div>` or `<span>` when custom styling isn't provided.
