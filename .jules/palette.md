## 2024-11-01 - Todo List Accessibility Enhancements
**Learning:** Found that custom Vue checkboxes and form inputs lacked semantic labels and proper hit areas. Additionally, a typo in the inline style (`line-trought`) was causing visual state changes to fail silently without throwing a console warning.
**Action:** Always wrap `input type="checkbox"` with its text in a `<label>` to improve Fitts's law target size, add `aria-label`s to form inputs, and carefully verify CSS property values for dynamic inline styles.
