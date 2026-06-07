## 2026-06-07 - Improve clickable hit area for Vue v-model checkboxes
**Learning:** Native checkboxes in Vue lists bound with v-model often suffer from poor usability because their hit area is tiny. Users naturally try to click the adjacent label text.
**Action:** Always wrap the native checkbox and its corresponding descriptive text inside a single `<label>` tag (optionally with `style="cursor: pointer"`). This dramatically increases the clickable hit area and improves accessibility without requiring custom components.
