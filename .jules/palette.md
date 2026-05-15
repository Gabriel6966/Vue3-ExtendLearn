## 2026-05-15 - Explicit ARIA Labels for v-model Inputs
**Learning:** Vue's v-model does not auto-generate accessible names for native inputs, requiring explicit labels/aria-labels for screen readers.
**Action:** Ensure all native form inputs, especially those without visible text labels, receive explicit aria-label or associated <label> tags when bound with v-model.
