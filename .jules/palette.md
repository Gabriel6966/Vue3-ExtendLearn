## 2026-06-15 - Wrap checkboxes in labels for better hit area
**Learning:** In Vue, native inputs aren't automatically wrapped in accessible labels. Wrapping the `<input type="checkbox">` and its descriptive text inside a `<label>` tag significantly increases the clickable area, drastically improving usability for users with motor impairments or those on mobile devices.
**Action:** Always verify that checkbox or radio inputs are wrapped in `<label>` tags or have explicit `id` and `for` associations with their text content, especially in custom list components.
