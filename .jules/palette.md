## 2026-05-07 - Explicit ARIA labels for Vue v-model bindings
**Learning:** Native HTML form controls bound with Vue's `v-model` do not automatically receive accessible names, which can lead to poor screen reader experiences.
**Action:** Always explicitly define accessible labels (via `<label>` or `aria-label`) for any form elements bound to dynamic data using `v-model`.
