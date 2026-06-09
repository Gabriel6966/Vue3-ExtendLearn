## 2024-05-24 - Path Traversal / SSRF Prevention
**Vulnerability:** Dynamic route parameters appended directly to Axios API URLs without sanitization.
**Learning:** Vue Router parameters are passed as strings at runtime, even if typed as numbers. Direct concatenation can lead to Path Traversal or SSRF vulnerabilities if the API base URL is manipulated.
**Prevention:** Always sanitize dynamic inputs using `encodeURIComponent()` before appending them to API URLs.
## 2024-05-18 - Prevent Axios hanging request Client-Side DoS
**Vulnerability:** Default Axios configurations do not have a timeout, leading to hanging requests if a server is unresponsive.
**Learning:** External API calls without explicit timeouts can cause client-side Denial of Service (DoS) by leaving promises unresolved indefinitely and eating browser resources.
**Prevention:** Always configure `axios.create()` or similar HTTP clients with a default `timeout` value (e.g., `timeout: 5000`) and handle timeout errors gracefully.
