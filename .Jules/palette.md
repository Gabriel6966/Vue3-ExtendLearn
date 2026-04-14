## 2026-04-14 - Vue v-model Accessibility
**Learning:** Native HTML form inputs (`<input>`, `<select>`) bound to Vue's `v-model` do not automatically generate accessible labels. Screen readers may announce them incorrectly if explicit labels (`<label>` or `aria-label`) are not provided.
**Action:** When adding inputs bound with `v-model`, especially standalone ones, always explicitly define `aria-label` or use a linked `<label>` to ensure screen reader accessibility.
