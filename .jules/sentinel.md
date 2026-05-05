## 2024-05-24 - Path Traversal / SSRF Prevention
**Vulnerability:** Dynamic route parameters appended directly to Axios API URLs without sanitization.
**Learning:** Vue Router parameters are passed as strings at runtime, even if typed as numbers. Direct concatenation can lead to Path Traversal or SSRF vulnerabilities if the API base URL is manipulated.
**Prevention:** Always sanitize dynamic inputs using `encodeURIComponent()` before appending them to API URLs.

## 2026-05-05 - Hanging Requests / Client-side DoS
**Vulnerability:** External API calls via Axios lack explicit timeout configuration.
**Learning:** Without a timeout, external requests can hang indefinitely if the backend is slow or unresponsive, leading to resource exhaustion and potential client-side Denial of Service (DoS).
**Prevention:** Always configure an explicit timeout (e.g., `timeout: 5000`) when creating an Axios instance.
