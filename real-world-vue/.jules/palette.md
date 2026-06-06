## 2024-05-24 - Dynamic CSS typos and Checkbox hit areas
**Learning:** Dynamic CSS typos (like `text-decoration:line-trought`) fail silently, breaking crucial visual feedback. Additionally, checkboxes without wrapping labels have a tiny hit area, frustrating users.
**Action:** Always verify CSS spellings in dynamic bindings visually using Playwright, and consistently wrap checkboxes and their text inside `<label>` tags to increase the clickable area.
