## 2024-05-24 - Path Traversal / SSRF Prevention
**Vulnerability:** Dynamic route parameters appended directly to Axios API URLs without sanitization.
**Learning:** Vue Router parameters are passed as strings at runtime, even if typed as numbers. Direct concatenation can lead to Path Traversal or SSRF vulnerabilities if the API base URL is manipulated.
**Prevention:** Always sanitize dynamic inputs using `encodeURIComponent()` before appending them to API URLs.
## 2024-06-26 - [Add Axios Timeout Security Enhancement]
**Vulnerability:** Missing timeout configuration in Axios instances allows hanging requests, which can lead to client-side Denial of Service (DoS) and application instability.
**Learning:** External API calls via Axios do not have default timeouts, which means requests could hang indefinitely if the server is unresponsive.
**Prevention:** Always configure an explicit timeout (e.g., `timeout: 5000`) in `axios.create()` options or individual request configurations.
