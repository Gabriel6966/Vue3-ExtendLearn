## 2026-08-04 - Improve Todo checkbox hit area and fix strikethrough typo
**Learning:** Checkboxes without a `<label>` wrapper require high-precision clicking, degrading accessibility. Also, dynamic style bindings in Vue fail silently when CSS properties are misspelled (like 'line-trought').
**Action:** Always wrap checkbox inputs and their descriptive text inside a `<label>` tag to expand the hit area, and rigorously verify CSS property spellings.
