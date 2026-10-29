## 2024-05-18 - Improve Todo component UX and accessibility
**Learning:** Some elements in dynamic lists like the Todo list were missing accessible labels, and spelling mistakes in CSS (like `line-trought`) prevent visual states from working. Adding an empty state helps the user understand when lists are successfully cleared, and `aria-label`s on selects/checkboxes aid screen readers without modifying existing layout.
**Action:** Always check form elements and checkboxes for `aria-label` in dynamic loops, and ensure CSS typo corrections accompany UX fixes for intended visual feedback.
