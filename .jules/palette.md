## 2025-01-01 - Add hit area and accessibility improvements to Todo List
**Learning:** Wrapping checkbox inputs with their text inside a <label> tag significantly improves the clickable hit area, making the UI more accessible for all users. Adding aria-labels to v-model inputs is crucial when there are no visible text labels.
**Action:** Always wrap checkboxes and their text inside <label> elements, and ensure all inputs have accessible names either via visible labels or aria-label attributes.
