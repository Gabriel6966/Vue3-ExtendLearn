## 2024-06-08 - Maximize Hit Areas and Fix Silent CSS Typos
**Learning:** Wrapping checkboxes and their labels in a `<label>` tag significantly improves UX by maximizing the clickable hit area. Additionally, dynamic style bindings in Vue (e.g., `:style`) fail silently if there is a CSS typo (like `line-trought`), preventing visual states from updating.
**Action:** Always wrap checkboxes with their descriptive text in a `<label>` tag to increase the hit area. Manually verify the spelling of dynamically bound CSS properties to ensure they function as intended.
