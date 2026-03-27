## 2024-03-27 - Using Semantic Labels in Interactive Lists
**Learning:** In interactive lists with checkboxes, wrapping the text content in a `<span>` forces users to click exactly on the tiny checkbox to toggle the state. This is poor UX and bad for accessibility.
**Action:** Always use `<label>` instead of `<span>` and associate it with the `<input>` using `for` and `id` attributes. This increases the clickable area significantly and properly associates the text with the checkbox for screen readers.
