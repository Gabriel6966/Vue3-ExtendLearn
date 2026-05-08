
## 2026-05-08 - Accessible Vue v-models
**Learning:** Vue's `v-model` on native HTML form inputs doesn't automatically generate accessible labels, causing screen readers to fail to announce the field's purpose.
**Action:** Always ensure explicit `aria-label` or `<label>` elements are used with native inputs, especially in dynamic lists.
