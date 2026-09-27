## 2024-05-24 - Empty States and Global Styles
**Learning:** The `#layout` wrapper forces a dark global text color `#2c3e50` that fails contrast checks on dark mode backgrounds.
**Action:** When adding plain text elements like empty states without custom CSS, use heading tags (e.g., `<h3>`) because they explicitly inherit `var(--color-heading)` which ensures proper readability.
