## 2026-08-20 - Add missing ARIA labels to form controls
**Learning:** In the Todo view, form controls (inputs, selects, checkboxes) lack associated labels or ARIA attributes, making them inaccessible to screen readers. Also, 'line-through' was misspelled as 'line-trought', breaking the visual feedback for completed tasks.
**Action:** Always add 'aria-label' to form elements when explicit <label> tags aren't present and double check CSS property spellings.
