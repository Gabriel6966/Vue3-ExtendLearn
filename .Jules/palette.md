## 2024-05-19 - Vue v-model Inputs Lacking Explicit Labels
**Learning:** Native HTML form inputs (`<input>`, `<select>`) bound to Vue's `v-model` do not automatically receive explicit accessible labels from Vue. Relying only on visual context or placeholders creates a poor experience for screen reader users.
**Action:** When adding or maintaining Vue components with `v-model` on form inputs, proactively ensure they receive explicit accessible labels (e.g., `<label>` or `aria-label`) to ensure full keyboard and screen reader accessibility.
