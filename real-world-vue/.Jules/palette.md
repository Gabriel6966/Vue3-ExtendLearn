
## 2024-05-18 - Missing ARIA Labels in v-model Forms
**Learning:** Native HTML form elements (like `<input>`, `<select>`, `<checkbox>`) that use Vue's `v-model` binding for reactive data often silently lack accessible labels if explicit `<label>` tags are not implemented alongside them. Developers may assume `v-model` or placeholders handle accessibility, leading to screen reader-unfriendly interfaces.
**Action:** When adding or reviewing Vue form inputs, always enforce explicit accessibility by pairing them with a `<label>` element or utilizing `aria-label` attributes, particularly when building dynamic lists or generic inputs where visual labels are omitted to save space.
