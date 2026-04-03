## 2024-05-14 - Native Input Labels with v-model
**Learning:** When adding native HTML form inputs (`<input>`, `<select>`) bound to Vue`s `v-model`, they do not automatically receive accessible labels or `aria-label` attributes, which can result in screen reader inaccessibility.
**Action:** Always ensure that form inputs, especially those tied directly to models using `v-model` without an explicit `<label>`, receive an explicit accessible name using `aria-label` or `aria-labelledby`.
