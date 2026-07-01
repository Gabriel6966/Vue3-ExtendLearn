## 2024-07-01 - Improve Checkbox Hit Area and Accessibility
**Learning:** Native checkboxes are hard to click and screen readers need `aria-label`s on form inputs. Also, dynamic CSS typos fail silently in Vue.
**Action:** Always wrap checkboxes and their text in `<label>` tags for a larger hit area, ensure native form elements have `aria-label`s if they lack explicit `<label>`s, and carefully check CSS property spellings.
