## 2024-05-24 - Path Traversal / SSRF Prevention
**Vulnerability:** Dynamic route parameters appended directly to Axios API URLs without sanitization.
**Learning:** Vue Router parameters are passed as strings at runtime, even if typed as numbers. Direct concatenation can lead to Path Traversal or SSRF vulnerabilities if the API base URL is manipulated.
**Prevention:** Always sanitize dynamic inputs using `encodeURIComponent()` before appending them to API URLs.
## 2024-05-24 - Missing Axios Timeout
**Vulnerability:** External API calls via Axios lack an explicit timeout, potentially causing hanging requests.
**Learning:** This can lead to client-side DoS or unresponsiveness if the server hangs.
**Prevention:** Always configure an explicit timeout (e.g., 5000ms) in Axios instances.
