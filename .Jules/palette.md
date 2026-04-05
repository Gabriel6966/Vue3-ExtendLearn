## 2024-04-05 - Vue v-model Accessible Labels
**Learning:** Native HTML form inputs (`<input>`, `<select>`) bound to Vue's `v-model` do not automatically receive explicit accessible labels. This is a common accessibility gap.
**Action:** When adding form inputs bound with `v-model`, proactively add explicit labels (either via associated `<label>` elements or `aria-label` attributes) to ensure they are properly read by screen readers.
