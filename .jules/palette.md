## 2026-07-12 - Improve form accessibility in Todo List
**Learning:** In Vue templates, wrapping checkboxes alongside their descriptive text in a `<label>` element significantly expands the clickable area and improves usability, while native inputs require explicit `aria-label` attributes for screen readers since `v-model` does not auto-generate them.
**Action:** Always wrap radio buttons and checkboxes within `<label>` tags and ensure all raw inputs have accessible labels.
