## 2024-09-21 - Empty State Color Inheritance
**Learning:** In real-world-vue, `--color-text` doesn't exist and `#layout` sets the global color (`#2c3e50`). Using `<p>` tags for empty states can break color inheritance and contrast checks.
**Action:** Always use `<div>` or `<span>` for plain text elements like empty states to ensure proper color inheritance.
