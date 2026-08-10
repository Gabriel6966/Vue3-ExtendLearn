## 2024-11-20 - Wrapping checkboxes with labels
**Learning:** In the Todo list component, the checkboxes were isolated, making the click target very small. Wrapping the checkbox and its associated text within a `<label>` tag significantly increases the hit area, improving accessibility and usability, particularly on touch devices.
**Action:** Always wrap checkboxes and radio buttons with their corresponding text inside a `<label>` or associate them with `id` and `for` attributes to maximize the clickable area.
