## 2024-07-03 - Improve Todo Checkbox Accessibility and Visuals
**Learning:** Native HTML forms bound to Vue's `v-model` lack explicit labels by default, and checkbox hit targets are very small. Furthermore, typos in dynamic Vue CSS bindings (e.g. `line-trought`) fail silently and prevent visual feedback.
**Action:** Always wrap checkboxes and their descriptive text inside `<label>` tags to expand the hit area. Add explicit `aria-label` attributes to `<input>` and `<select>` tags missing visible labels. Explicitly double-check the spelling of CSS properties in dynamic bindings.
