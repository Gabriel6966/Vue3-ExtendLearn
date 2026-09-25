## 2025-03-05 - Plain Text Empty States
**Learning:** When adding plain text elements (like empty states) without custom CSS in this app, using `<div>` or `<span>` instead of `<p>` tags is necessary to ensure proper color inheritance from the `#layout` element (`#2c3e50`) and pass contrast checks, since `var(--color-text)` does not exist.
**Action:** Always use `<div>` or `<span>` for new unstyled text elements to maintain accessible contrast.

## 2025-03-05 - Empty State Color Contrast
**Learning:** In the `real-world-vue` project, the `#layout` element forces the global text color `#2c3e50`, which fails contrast checks on dark mode backgrounds. When adding plain text elements (like empty states) without custom CSS, use heading tags (e.g., `<h3>`) instead of `<div>` or `<span>`, as heading tags within `#layout` explicitly inherit `var(--color-heading)` (`#ffffff`), ensuring proper readability.
**Action:** Always wrap unstyled text elements in heading tags (e.g., `<h3>`) when placed inside `#layout` to inherit dark-mode compliant contrast colors.
