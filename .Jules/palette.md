## 2024-07-02 - Improve hit area for checkboxes
**Learning:** Wrapping a checkbox input and its descriptive text in a <label> tag significantly increases the clickable hit area, making it easier to use on desktop and touch devices. Native Vue v-model bindings don't automatically assign accessible labels, requiring explicit aria-label or <label> wrappers.
**Action:** Whenever adding checkboxes, always wrap them with their label text inside a <label> tag to enhance accessibility and usability.
