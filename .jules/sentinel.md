## 2024-05-24 - Path Traversal / SSRF Prevention
**Vulnerability:** Dynamic route parameters appended directly to Axios API URLs without sanitization.
**Learning:** Vue Router parameters are passed as strings at runtime, even if typed as numbers. Direct concatenation can lead to Path Traversal or SSRF vulnerabilities if the API base URL is manipulated.
**Prevention:** Always sanitize dynamic inputs using `encodeURIComponent()` before appending them to API URLs.
## 2024-05-18 - Prevent Hanging API Requests
**Vulnerability:** External API calls via Axios lack a timeout configuration, exposing the application to potential client-side Denial of Service (DoS) and degraded user experience if the server hangs.
**Learning:** By default, Axios does not enforce a timeout, which can lead to indefinite hanging requests. Explicitly setting a timeout is a crucial defense-in-depth practice.
**Prevention:** Always configure explicit timeouts (e.g., `timeout: 5000`) for Axios or `fetch` clients to ensure the application fails securely and promptly.
