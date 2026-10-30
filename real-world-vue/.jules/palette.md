## 2026-10-30 - Todo List Interaction and Typo
**Learning:** Vue silently ignores invalid CSS property values (like `line-trought`) in dynamic inline styles without warnings, so visual state changes must be manually verified. Also, checking boxes is hard if not wrapped in labels.
**Action:** Always wrap checkboxes in semantic `<label>` elements to increase hit area, and double-check CSS property names in dynamic template bindings.
