## 2024-04-06 - Missing ARIA Labels on v-model Inputs
**Learning:** Native HTML form inputs (`<input>`, `<select>`) bound to Vue's `v-model` do not automatically receive accessible labels, making them difficult to use for screen reader users.
**Action:** When adding native form elements in Vue components, ensure they receive explicit accessible labels (e.g., using `<label>` or `aria-label`).
