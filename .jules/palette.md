## 2024-05-13 - Missing ARIA labels and typo in dynamic CSS
**Learning:** When using dynamic style bindings in Vue (e.g., `:style`), typos in CSS properties (like `text-decoration:line-trought`) fail silently and do not apply the intended styles. Also, native HTML form inputs (`<input>`, `<select>`) bound to Vue's `v-model` must receive explicit accessible labels.
**Action:** Explicitly verify CSS property spellings in dynamic bindings, and always ensure `aria-label` or `<label>` elements are added to all native form inputs used in Vue templates.
