## 2024-11-04 - Fix Checkbox Hit Area in Vue Templates
**Learning:** The default `<input type="checkbox">` hit area is too small for accessible touch/click targets. Additionally, inline style bindings in Vue (e.g. `:style`) silently ignore invalid CSS properties like `line-trought`, which can break visual feedback without throwing errors.
**Action:** Always wrap `<input type="checkbox">` elements and their accompanying text within a semantic `<label>` element to increase the clickable area (Fitts's Law), and manually verify visual state changes that rely on inline styles.
