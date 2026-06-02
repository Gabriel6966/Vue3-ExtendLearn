## 2024-05-31 - Todo List UX Improvements
**Learning:** Wrapping checkboxes and their associated text inside a `<label>` significantly increases the clickable hit area, improving accessibility. Also, Vue silently fails on dynamic CSS typos (like `line-trought`), preventing visual feedback.
**Action:** Always wrap form inputs with descriptive labels, and explicitly verify CSS property spellings in dynamic style bindings.
