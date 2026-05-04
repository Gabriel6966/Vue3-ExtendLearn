## 2026-05-04 - Native Form Inputs Missing Labels
**Learning:** Native HTML form inputs (`<input>`, `<select>`) bound to Vue's `v-model` do not automatically receive accessible labels, making them inaccessible to screen readers without explicit `aria-label` or `<label>` elements.
**Action:** Always ensure explicit accessible labels are added to `v-model` bound inputs.
