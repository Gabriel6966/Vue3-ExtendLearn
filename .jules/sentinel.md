## 2024-05-24 - Path Traversal / SSRF Prevention
**Vulnerability:** Dynamic route parameters appended directly to Axios API URLs without sanitization.
**Learning:** Vue Router parameters are passed as strings at runtime, even if typed as numbers. Direct concatenation can lead to Path Traversal or SSRF vulnerabilities if the API base URL is manipulated.
**Prevention:** Always sanitize dynamic inputs using `encodeURIComponent()` before appending them to API URLs.
## 2024-05-18 - Missing Axios Timeouts
**Vulnerability:** The global Axios instance used for API calls did not have a timeout configured.
**Learning:** This exposes the application to client-side Denial of Service (DoS) and resource exhaustion if the backend becomes unresponsive or requests hang indefinitely.
**Prevention:** Always configure an explicit timeout (e.g., `timeout: 5000`) when creating Axios instances or making external API calls.
