## 2026-06-19 - Fix Todo list accessibility and visual feedback
**Learning:** Checkboxes without wrapping <label> tags severely reduce hit areas, making interaction difficult for users, and dynamic inline style bindings like :style can silently fail if there are CSS property typos (e.g. line-trought).
**Action:** Always wrap checkboxes and their corresponding text in a <label> tag to increase clickable area, and carefully verify CSS property spellings in dynamic bindings.
