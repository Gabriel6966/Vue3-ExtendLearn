## 2024-05-18 - Improve Clickable Area for Checkboxes
**Learning:** Checkboxes alone have a small hit area, making them difficult to click. Wrapping the checkbox and its associated text in a `<label>` element significantly increases the clickable area, improving accessibility (Fitts's Law).
**Action:** Always wrap `<input type="checkbox">` and its text within a `<label>` element.
