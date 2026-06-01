## 2026-06-01 - Missing Form Labels in Vue v-model Bindings
**Learning:** Native HTML form inputs bound via Vue's v-model do not automatically receive accessible labels, making them inaccessible to screen readers. Furthermore, checkboxes without wrapped labels have small hit areas, hurting usability.
**Action:** Always verify that inputs have explicit <label> elements or aria-label attributes, and wrap checkboxes with their descriptive text inside a <label> tag to increase the clickable hit area.
