## 2024-06-04 - Improve Checkbox Usability and Form Accessibility
**Learning:** In Vue 'v-model' native elements, explicit accessible labels are missing by default, and checkbox inputs combined with text without an enclosing '<label>' severely reduce the clickable hit area for users.
**Action:** Always wrap checkbox inputs and their corresponding text descriptions in a '<label>' tag to increase the clickable hit area, and ensure unlabelled input/select fields receive explicit 'aria-label' attributes.
