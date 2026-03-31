## 2024-05-24 - Vue v-model Accessible Labels
**Learning:** Native HTML form inputs (`<input>`, `<select>`) bound to Vue's `v-model` do not automatically generate explicit accessible labels. This means screen readers won't understand their purpose without additional context.
**Action:** When adding inputs bound with `v-model`, always explicitly add `aria-label`, `aria-labelledby`, or an associated `<label>` tag.
