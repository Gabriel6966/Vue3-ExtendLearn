## 2026-05-23 - Improve checkbox hit area
**Learning:** In Vue, native checkboxes nested alongside plain span elements create poor hit targets and cause click friction for users.
**Action:** Always wrap native checkbox inputs and their descriptive content within a single <label> tag to drastically increase the clickable hit area and improve accessibility.
