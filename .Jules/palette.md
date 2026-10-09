
## 2023-10-09 - Form Inputs and Visual Feedback Typography
**Learning:** The Todo app uses unlabelled form inputs (like text and select) without `aria-label` or `<label>` wrappers, making it difficult for screen readers to identify fields. Additionally, a typo in the inline style (`text-decoration:line-trought`) broke the critical visual feedback for completed items.
**Action:** Always verify inline styles for state changes (like completion) actually render correctly and ensure all isolated `<input>` and `<select>` tags receive `aria-label` bindings if standard labels are omitted.
