## 2024-10-31 - Todo Empty State Inheritance
**Learning:** In the real-world-vue project, `var(--color-text)` does not actually exist; the global text color `#2c3e50` is set by the `#layout` element. When adding plain text elements (like empty states) without custom CSS, `<p>` tags might have default browser margins that affect alignment, whereas `<div>` or `<span>` inherit cleanly.
**Action:** Use `<div>` or `<span>` for simple empty states instead of `<p>` to ensure proper color inheritance and layout consistency without adding custom CSS.
