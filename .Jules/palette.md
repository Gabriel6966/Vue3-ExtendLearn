## 2024-04-12 - Missing explicit accessibility labels in native elements bound with v-model
**Learning:** In Vue, native form inputs dynamically bound with `v-model` (like `<input>` or `<select>`) do not automatically receive accessible labels or names if a `<label>` element isn't explicitly linked or `aria-label` isn't provided. This makes forms inaccessible to screen readers by default.
**Action:** Always ensure that any native input or select element bound with `v-model` has either an explicitly associated `<label>` or an `aria-label` attribute to maintain accessibility.
