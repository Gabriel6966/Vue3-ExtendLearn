## 2024-05-18 - Todo Component Missing Labels
**Learning:** Found an accessibility issue pattern in the Todo component where interactive inputs (`<input>`, `<select>`, `<checkbox>`) using `v-model` lack explicit labels or `aria-label`s, breaking screen reader context.
**Action:** Always ensure any standalone form inputs or interactive elements added to utility components include an `aria-label` to provide context for screen readers when visible labels are missing.
