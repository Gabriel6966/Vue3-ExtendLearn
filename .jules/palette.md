## 2023-10-27 - Vue Dynamic Style Typos
**Learning:** Vue dynamic style bindings (e.g. `:style`) fail silently when CSS properties are misspelled (like line-trought), providing no visual feedback to users or console errors to developers.
**Action:** When adding or modifying inline styles with dynamic bindings, always explicitly double-check CSS property spellings and test the visual state directly.
