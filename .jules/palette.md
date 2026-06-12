## 2026-06-12 - [Improve Todo list UX]
**Learning:** Checkboxes without wrapping labels have small hit areas, and typos in Vue dynamic :style bindings (like line-trought) fail silently without errors.
**Action:** Wrap checkbox inputs and their descriptive text within <label> elements, ensure proper aria-label attributes are present for native inputs bound to v-model, and double-check CSS property spellings.
