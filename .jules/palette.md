## 2024-05-24 - Vue Inline Style Binding Verification
**Learning:** Vue silently ignores invalid CSS property values in dynamic inline style bindings (e.g., `:style` with `text-decoration:line-trought`) without throwing console warnings, meaning broken visual state changes can go unnoticed.
**Action:** Always manually verify the visual output of components relying on dynamic inline styles, rather than assuming Vue will warn about syntax errors.
