## 2024-05-24 - Improved Todo List Accessibility and UX
**Learning:** In the Todo list component, form inputs and checkboxes lacked proper labels and hit areas, and buttons allowed invalid state submissions.
**Action:** Always wrap checkboxes and their associated text inside a <label> element with cursor pointer styling to expand the clickable target area. Additionally, disable primary action buttons when the required input is empty.
