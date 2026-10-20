## 2024-05-24 - Path Traversal / SSRF Prevention
**Vulnerability:** Dynamic route parameters appended directly to Axios API URLs without sanitization.
**Learning:** Vue Router parameters are passed as strings at runtime, even if typed as numbers. Direct concatenation can lead to Path Traversal or SSRF vulnerabilities if the API base URL is manipulated.
**Prevention:** Always sanitize dynamic inputs using `encodeURIComponent()` before appending them to API URLs.
## 2026-10-20 - Input validation missing in Todo app
**Vulnerability:** Client-side state bloat DoS and potential injection from unbound input lengths.
**Learning:** Even client-side state needs length restrictions to prevent silent submission failures or browser performance issues from excessively large strings.
**Prevention:** Always add both JS-based string length validation and HTML maxlength attributes to all user inputs.
