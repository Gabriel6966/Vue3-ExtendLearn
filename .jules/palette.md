
## 2026-06-05 - Todo List Accessibility Enhancements
**Learning:** Wrapping checkbox inputs and their descriptive text inside a <label> tag significantly improves usability by increasing the clickable hit area. Additionally, native HTML form inputs bound to Vue's v-model require explicit aria-labels for proper accessibility, as Vue does not generate them automatically.
**Action:** Always wrap checkboxes with their corresponding text inside <label> tags and ensure explicit aria-labels on inputs/selects bound to v-model.
