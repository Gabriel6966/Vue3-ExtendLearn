## 2024-05-24 - Plain Text Contrast in Empty States
**Learning:** In this project, `var(--color-text)` does not actually exist and `<p>` tags fail contrast checks. The global text color `#2c3e50` is set by the `#layout` element.
**Action:** When adding plain text elements like empty states without custom CSS, prefer using `<div>` or `<span>` instead of `<p>` tags to ensure proper color inheritance and pass contrast checks.
