## 2024-04-30 - Fix silent failure in dynamic Vue style binding
**Learning:** Dynamic style bindings in Vue (e.g. `:style`) fail silently if there is a typo in the CSS property or value (e.g. `line-trought`), leading to missing visual feedback.
**Action:** Always verify CSS property spellings explicitly when using dynamic style bindings, as typos will not throw an error.
