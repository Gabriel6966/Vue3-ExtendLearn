## 2026-04-01 - Vue v-model Accessibility
**Learning:** Vue's `v-model` binding on form inputs does not automatically generate accessible labels, leading to missing context for screen readers if explicit `aria-label` or `<label>` elements are omitted.
**Action:** Always verify that every input element bound with `v-model` has an explicit accessible label to ensure screen reader compatibility.
