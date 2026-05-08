## 2024-05-24 - Path Traversal / SSRF Prevention
**Vulnerability:** Dynamic route parameters appended directly to Axios API URLs without sanitization.
**Learning:** Vue Router parameters are passed as strings at runtime, even if typed as numbers. Direct concatenation can lead to Path Traversal or SSRF vulnerabilities if the API base URL is manipulated.
**Prevention:** Always sanitize dynamic inputs using `encodeURIComponent()` before appending them to API URLs.

## 2024-05-24 - Client-side DoS Prevention
**Vulnerability:** Axios instance lacked an explicit timeout, allowing requests to hang indefinitely.
**Learning:** Default Axios configurations do not have a timeout. In applications relying on external APIs, hanging requests can lead to poor user experience or client-side Denial of Service if too many resources are tied up waiting.
**Prevention:** Always configure an explicit `timeout` (e.g., `timeout: 5000`) on global Axios instances or critical API requests.
