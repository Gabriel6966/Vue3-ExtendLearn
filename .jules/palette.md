## 2023-11-20 - Improve Form Accessibility and Checkbox Hit Areas
**Learning:** Wrapping a native checkbox and its corresponding label text inside a semantic `<label>` element significantly increases the clickable hit area, improving accessibility (Fitts's Law) without requiring custom CSS.
**Action:** Always wrap `<input type="checkbox">` and its text within a `<label>` in Vue components.
