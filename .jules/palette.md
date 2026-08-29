
## 2024-05-24 - Todo List Checkbox Accessibility
**Learning:** In list items, a bare checkbox next to a span creates a tiny click target and lacks an implicit accessible name for screen readers, leading to poor UX for both touch users and assistive tech.
**Action:** Always wrap the checkbox and its adjacent text inside a `<label>` tag to provide a large click target and a robust implicit label without custom CSS.
