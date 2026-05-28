## 2024-05-28 - Wrapping checkboxes in labels
**Learning:** Wrapping native checkboxes along with their text description in a `<label>` tag significantly increases the clickable hit area, making interaction much easier for users, especially on touch devices or for users with motor impairments. Native Vue inputs without explicit labels are also inaccessible.
**Action:** Always wrap checkboxes and their text inside `<label>` elements, and explicitly use `aria-label` for form inputs that don't have visual labels.
