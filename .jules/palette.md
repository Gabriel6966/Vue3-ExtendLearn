## 2026-04-20 - Adding ARIA labels to Vue form bindings
**Learning:** When using v-model with native inputs without dedicated <label> elements, screen readers lack context. Also, CSS typos in dynamic style bindings fail silently.
**Action:** Ensure dynamic ARIA labels are added to checkboxes/inputs and explicitly verify CSS property spellings.
