## 2024-10-06 - Use heading tags for plain text within #layout
**Learning:** The `#layout` element forces global text color `#2c3e50`, failing contrast checks on dark mode backgrounds.
**Action:** When adding plain text elements without custom CSS (like empty states), use heading tags (e.g., `<h3>`) instead of `<div>` or `<span>`, as they inherit `#ffffff` ensuring readability.
