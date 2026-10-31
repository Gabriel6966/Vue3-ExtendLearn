## 2024-05-24 - Path Traversal / SSRF Prevention
**Vulnerability:** Dynamic route parameters appended directly to Axios API URLs without sanitization.
**Learning:** Vue Router parameters are passed as strings at runtime, even if typed as numbers. Direct concatenation can lead to Path Traversal or SSRF vulnerabilities if the API base URL is manipulated.
**Prevention:** Always sanitize dynamic inputs using `encodeURIComponent()` before appending them to API URLs.
## 2024-10-31 - Unrestricted Input Length State Bloat
**Vulnerability:** Unrestricted input length on task labels in Vue state.
**Learning:** Reactive state arrays can cause excessive memory usage or DoS if elements (like strings) grow without bounds due to missing length validation on both the client side and the state modification function.
**Prevention:** Always validate and enforce reasonable maximum lengths for user inputs (e.g. `maxlength` on inputs) and enforce limits in the javascript handlers processing those inputs.
