## 2024-06-28 - Improve Hit Areas and Fix Silent CSS Typos
**Learning:** Wrapping checkboxes and their accompanying text in a <label> tag significantly improves the clickable hit area, making interactions much more accessible and user-friendly. Also, dynamic style bindings in Vue fail silently if there is a typo (like 'line-trought'), so they must be explicitly verified.
**Action:** Always verify CSS property spellings in Vue dynamic style bindings. Always wrap checkboxes and their labels within <label> elements for improved hit areas.
