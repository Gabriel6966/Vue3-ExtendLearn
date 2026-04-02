## 2024-05-24 - Add ARIA Labels to Vue v-model Inputs
**Learning:** Vue's `v-model` binding on native HTML inputs (`<input>`, `<select>`) does not automatically generate accessible labels for screen readers. This results in inaccessible form fields if explicit `<label>` or `aria-label` attributes are omitted.
**Action:** Always verify that every native input and select bound with `v-model` has a corresponding explicit label or `aria-label` attribute to maintain keyboard accessibility and screen reader support.
