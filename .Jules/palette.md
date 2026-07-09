## 2024-05-24 - Todo List A11y and Visual Polish
**Learning:** Dynamic CSS typos (like `line-trought`) fail silently in Vue. Checkboxes need label wrappers to increase clickable hit area significantly, and form inputs need explicit `aria-label`s when visible `<label>` text is missing.
**Action:** Always wrap checkboxes and their descriptive text with `<label>`. Double-check CSS spelling in dynamic bindings.
