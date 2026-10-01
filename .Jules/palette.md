## 2024-10-24 - Empty State Contrast in #layout
**Learning:** Plain text elements inside `#layout` fail contrast checks on dark mode backgrounds because `#layout` forces a global text color of `#2c3e50`.
**Action:** When adding empty states or plain text without custom CSS, use heading tags (e.g., `<h3>`) instead of `<div>` or `<span>`, as they explicitly inherit `var(--color-heading)` (`#ffffff`) for proper readability.
