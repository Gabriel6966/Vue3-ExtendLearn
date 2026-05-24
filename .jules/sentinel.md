## 2024-05-24 - Path Traversal / SSRF Prevention
**Vulnerability:** Dynamic route parameters appended directly to Axios API URLs without sanitization.
**Learning:** Vue Router parameters are passed as strings at runtime, even if typed as numbers. Direct concatenation can lead to Path Traversal or SSRF vulnerabilities if the API base URL is manipulated.
**Prevention:** Always sanitize dynamic inputs using `encodeURIComponent()` before appending them to API URLs.
## 2024-05-24 - Missing Timeout on External API Calls
**Vulnerability:** Axios requests lack an explicit timeout, posing a risk of hanging requests and client-side Denial of Service (DoS).
**Learning:** Axios does not enforce a timeout by default. If the server is unresponsive, client resources may be tied up indefinitely.
**Prevention:** Always configure `timeout` (e.g., `timeout: 5000`) when creating `axios.create()` instances to ensure requests fail gracefully if a server hangs.
