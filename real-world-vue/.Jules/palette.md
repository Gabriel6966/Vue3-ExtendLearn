
## 2026-04-18 - [Missing aria-labels and CSS typo in Todo form]
**Learning:** Native form inputs and selects bound to v-model lack accessible labels by default, and a CSS typo (line-trought instead of line-through) breaks expected UX feedback for completed tasks.
**Action:** Added aria-label attributes to the inputs and selects and fixed the CSS typo. Future forms must ensure inputs have corresponding aria-labels or <label> elements, and CSS syntax should be verified.
