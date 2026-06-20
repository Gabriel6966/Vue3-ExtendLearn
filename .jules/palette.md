## 2024-06-20 - Fix broken Vue style bindings and checkbox accessibility
**Learning:** In Vue, invalid inline CSS values (like typos in text-decoration) fail silently without warnings, breaking visual feedback. Also, native checkboxes without labels cause poor hit area targeting.
**Action:** Always wrap checkboxes with their descriptive text in a <label> tag, and verify CSS property spellings explicitly when using dynamic style bindings in Vue.
