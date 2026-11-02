## 2024-05-02 - Increased Hit Area for Custom Checkboxes
**Learning:** In `Todo.vue`, list item checkboxes lacked a `label` wrapper, making it frustratingly hard to click them since the user had to precisely click the small native input rather than the accompanying text (a violation of Fitts's Law).
**Action:** Always wrap `<input type="checkbox">` elements and their text nodes within a semantic `<label>` element, rather than keeping them adjacent, to maximize the clickable target area without requiring custom JavaScript click handlers.
