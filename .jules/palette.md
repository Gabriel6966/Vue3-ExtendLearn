## 2024-07-13 - Improved Todo Checkbox Hit Area and Visual Feedback
**Learning:** Native HTML checkboxes in Vue components often have tiny hit areas which are inaccessible. Also, typos in dynamic style bindings (like `text-decoration: line-trought`) fail silently, causing visual feedback for state changes (like completion) to break.
**Action:** Always wrap checkboxes and their associated text inside a `<label>` tag to significantly increase the clickable hit area. Ensure exact CSS property spellings are verified when using dynamic inline styles.
