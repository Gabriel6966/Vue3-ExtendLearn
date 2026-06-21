## 2026-06-21 - [Increase Hit Area and Fix Silent CSS Errors]
**Learning:** In Vue templates, typos in dynamic style bindings (like text-decoration: line-trought) fail silently without throwing console errors, leading to missing visual feedback. Additionally, wrapping checkboxes and their descriptive text within a <label> tag significantly improves accessibility by increasing the clickable hit area, which is a crucial micro-UX improvement.
**Action:** Always wrap native checkboxes with their text in a <label> and double-check CSS property spelling in Vue dynamic bindings.
