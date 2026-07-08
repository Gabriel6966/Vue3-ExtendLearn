## 2024-07-08 - Accessible Checkbox Hit Areas
**Learning:** Wrapping both the checkbox input and its descriptive text within a `<label>` tag significantly increases the clickable hit area, improving usability for all users.
**Action:** Always wrap checkboxes and their text inside `<label>` elements rather than placing them adjacently without association.

## 2024-07-08 - Form Control Accessibility
**Learning:** Vue's `v-model` does not auto-generate accessible names. Inputs and selects without visible text labels fail accessibility audits.
**Action:** Always provide explicit `aria-label` attributes for form inputs and selects when a visible `<label>` is not present.
