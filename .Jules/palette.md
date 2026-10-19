## 2024-05-24 - Todo List UX Polish
**Learning:** In Todo lists, neglecting the input lifecycle (not clearing after submit, allowing empty submits) and missing empty states creates high friction. Typo in CSS (`line-trought`) also silently broke visual feedback.
**Action:** Always bind `@keyup.enter`, enforce input clearing on success, disable submit on empty, and include empty state messaging.
