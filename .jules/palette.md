## 2024-10-26 - Disabled states and CSS typos in Todo list
**Learning:** The Todo component was missing disabled states for empty inputs and had a CSS typo (`line-trought` instead of `line-through`) which prevented the completed task visual feedback from showing. Also, ARIA labels were missing on native HTML elements in the list.
**Action:** When working on lists, ensure empty task additions are prevented via `:disabled` on buttons. Always verify CSS property names (like `line-through`) in Vue inline styles, and attach dynamic `:aria-label` to list items based on their content.
