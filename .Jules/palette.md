## 2026-04-23 - Explicit Accessibility Labels for v-model Inputs
**Learning:** Native HTML form inputs (e.g., `<input>`, `<select>`) bound to Vue's `v-model` do not automatically generate accessible labels, leading to missing context for screen readers.
**Action:** Always provide explicit `aria-label` or `<label>` elements for inputs, even when bound to reactive data via `v-model`.
