## 2024-05-24 - Path Traversal / SSRF Prevention
**Vulnerability:** Dynamic route parameters appended directly to Axios API URLs without sanitization.
**Learning:** Vue Router parameters are passed as strings at runtime, even if typed as numbers. Direct concatenation can lead to Path Traversal or SSRF vulnerabilities if the API base URL is manipulated.
**Prevention:** Always sanitize dynamic inputs using `encodeURIComponent()` before appending them to API URLs.
## 2024-11-21 - Input validation for local state
**Vulnerability:** Missing input length constraints on client-side state manipulation (Todo item creation).
**Learning:** Even entirely client-side apps require state boundaries. Unbounded input fields can lead to local state bloat and degraded performance/UX, which acts as a localized DoS.
**Prevention:** Always add corresponding `maxlength` attributes on HTML inputs along with length validation in the JavaScript handler before updating state.
