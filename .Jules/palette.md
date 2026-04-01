## 2026-03-30 - Adding accessibility explicitly to components mapped using v-model
**Learning:** When adding native HTML form inputs (`<input>`, `<select>`) bound to Vue's `v-model`, ensure they receive explicit accessible labels (e.g., `<label>` or `aria-label`), as Vue does not generate them automatically.
**Action:** Use `aria-label` for all inputs when explicit labels are missing to ensure screen reader compatibility, and always provide helpful context inside.
