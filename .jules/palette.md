## 2024-05-20 - Fix typo in `:style` text-decoration and wrap checkboxes in labels
**Learning:** Wrapping checkboxes and their labels in a `<label>` element significantly increases the clickable hit area, making the application easier to use, especially for users with motor impairments or those on touch devices. Also typos in dynamic `:style` bindings fail silently without errors.
**Action:** Always wrap native inputs like checkboxes and radio buttons in `<label>` elements when text accompanies them. Always verify CSS property spellings explicitly when using dynamic style bindings.
