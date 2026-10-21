## 2024-05-24 - Wrapped Inputs inside Labels
**Learning:** Lists with checkboxes (like Todo lists) often have tiny click targets if the checkbox isn't wrapped in a `<label>` with the descriptive text, harming accessibility and mobile usability.
**Action:** Always verify if a checkbox is properly associated with its label text, either by `for`/`id` linking or by wrapping the checkbox and text inside a single `<label>` element.
