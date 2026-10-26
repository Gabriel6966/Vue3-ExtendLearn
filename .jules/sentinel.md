## 2024-05-24 - Path Traversal / SSRF Prevention
**Vulnerability:** Dynamic route parameters appended directly to Axios API URLs without sanitization.
**Learning:** Vue Router parameters are passed as strings at runtime, even if typed as numbers. Direct concatenation can lead to Path Traversal or SSRF vulnerabilities if the API base URL is manipulated.
**Prevention:** Always sanitize dynamic inputs using `encodeURIComponent()` before appending them to API URLs.
## 2024-10-26 - Add input length limits to prevent state bloat
**Vulnerability:** Lack of input length limits and validation in Todo list form allowing arbitrary string lengths.
**Learning:** Client-side list/state management can be vulnerable to state bloat (DoS risk) if input lengths aren't constrained before adding items to arrays.
**Prevention:** Always pair HTML `maxlength` with Javascript validation/trimming when handling user input that populates state arrays.
