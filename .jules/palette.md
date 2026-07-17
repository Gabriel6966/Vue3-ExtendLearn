## 2026-07-17 - Enhanced Checkbox Hit Area & Vue a11y
**Learning:** In Vue, native inputs bound via v-model don't get auto-labeled, causing screen reader issues. Additionally, standalone checkboxes have a tiny clickable area, hurting usability.
**Action:** Always wrap checkboxes and their labels in a `<label>` tag to maximize the hit area, and explicitly provide `aria-label` for `v-model` bound native inputs.
