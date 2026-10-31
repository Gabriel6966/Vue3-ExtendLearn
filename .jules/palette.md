## 2024-10-31 - Vue Inline Style Binding Failure
**Learning:** Vue silently ignores invalid CSS property values (like a typo `line-trought`) in dynamic inline style bindings (`:style`) without console warnings. The UI appears broken, but there's no error stack to indicate why.
**Action:** Always manually test/verify visual state changes relying on dynamic bindings instead of assuming they work just because there are no console errors.
