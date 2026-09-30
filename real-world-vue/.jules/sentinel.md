## 2024-05-24 - Add input length limits to Todo form
**Vulnerability:** Missing input validation and length limits on Todo task creation.
**Learning:** Unrestricted input length can lead to denial of service (DoS) or performance degradation when rendering large lists.
**Prevention:** Always add sensible maxlength attributes to input fields and validate lengths in the Javascript logic before appending to local state.
