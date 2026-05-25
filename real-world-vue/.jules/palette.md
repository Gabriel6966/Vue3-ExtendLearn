## 2024-05-25 - Improve Checkbox Hit Areas
**Learning:** Checkbox inputs in Vue `v-for` loops often lack associated labels, reducing the clickable hit area and impairing accessibility for users with motor difficulties.
**Action:** Always wrap `<input type="checkbox">` and its corresponding descriptive text in a `<label>` element, especially within list iterators.
