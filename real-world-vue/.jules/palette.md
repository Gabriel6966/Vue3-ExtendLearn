## 2026-07-10 - Improve Checkbox Hit Area & Fix Styling Typos
**Learning:** Wrapping a checkbox input and its associated text within a `<label>` tag significantly increases the clickable hit area, making it easier for users (especially those with motor disabilities or on touch devices) to interact with the input. Also, typos in inline CSS (like `text-decoration:line-trought`) fail silently in Vue.
**Action:** Always wrap checkboxes and their labels in a `<label>` tag, and double-check inline CSS syntax.
