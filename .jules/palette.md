## 2026-05-03 - Missing ARIA Labels on Native Form Elements
**Learning:** In Vue, native form elements like <input> and <select> bound with v-model do not automatically generate accessible labels, which hinders screen reader users.
**Action:** Always verify and manually add aria-labels or explicitly linked <label> tags to native form inputs when using v-model.
