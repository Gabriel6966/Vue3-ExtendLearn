## 2024-04-26 - Vue Dynamic Styles & ARIA Labels
**Learning:** Dynamic style bindings in Vue silently fail with typos (like `line-trought`), and native form inputs bound with `v-model` lack accessible names by default.
**Action:** Always verify CSS property spellings in dynamic styles and ensure explicit `aria-label` or `<label>` tags are added to `v-model` inputs.
