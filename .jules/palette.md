## 2026-06-25 - Todo List Checkbox Hit Area and Accessibility
**Learning:** Wrapping a checkbox and its label text in a single `<label>` tag significantly increases the clickable hit area, making it easier for users (especially on touch devices or with motor impairments) to toggle the checkbox. Also, Vue dynamic style bindings fail silently if there is a CSS typo (e.g., `line-trought` instead of `line-through`).
**Action:** Always wrap checkboxes and their descriptive text in a `<label>` and explicitly verify CSS property spelling in dynamic style bindings.
