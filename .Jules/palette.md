## 2024-05-24 - Fix Todo List Hit Area and Style Typo
**Learning:** Wrapping native checkbox inputs and their labels in a `<label>` tag significantly increases the clickable hit area, improving accessibility. Also, Vue dynamic style bindings fail silently if CSS properties are misspelled, which can hide visual feedback.
**Action:** Always wrap checkboxes and their descriptive text in a `<label>` and double-check CSS property spelling in dynamic bindings.
