## 2024-11-01 - Prevent Input State Bloat and DoS
**Vulnerability:** Unrestricted input length on task labels in Todo list.
**Learning:** Lack of max length validation in both the Vue component `<input>` (HTML max length) and JS state logic could lead to user-side resource exhaustion or backend DoS if long strings are kept in reactive state and saved.
**Prevention:** Always pair a `maxlength` HTML attribute with programmatic JS length checks (`.trim()` and length condition) on form submission.
