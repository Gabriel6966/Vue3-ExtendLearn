## 2024-05-24 - Path Traversal / SSRF Prevention
**Vulnerability:** Dynamic route parameters appended directly to Axios API URLs without sanitization.
**Learning:** Vue Router parameters are passed as strings at runtime, even if typed as numbers. Direct concatenation can lead to Path Traversal or SSRF vulnerabilities if the API base URL is manipulated.
**Prevention:** Always sanitize dynamic inputs using `encodeURIComponent()` before appending them to API URLs.

## 2024-05-24 - DoS and State Bloat Prevention
**Vulnerability:** Input length limits missing on Todo tasks.
**Learning:** Unrestricted input length allows potential DoS via state bloat/large payloads. While Vue reactively handles data well, huge inputs can cause UI freezing or unexpected memory exhaustion. Adding `maxlength` to the template input alone isn't enough, we must also trim inputs in logic before pushing to state to handle accidental whitespaces.
**Prevention:** Apply input size constraints in both UI attributes (`maxlength`) and data processing logic (`trim()`).
