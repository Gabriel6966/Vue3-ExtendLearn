## 2024-05-24 - Path Traversal / SSRF Prevention
**Vulnerability:** Dynamic route parameters appended directly to Axios API URLs without sanitization.
**Learning:** Vue Router parameters are passed as strings at runtime, even if typed as numbers. Direct concatenation can lead to Path Traversal or SSRF vulnerabilities if the API base URL is manipulated.
**Prevention:** Always sanitize dynamic inputs using `encodeURIComponent()` before appending them to API URLs.
## 2024-05-24 - Add Axios Timeout
**Vulnerability:** Missing timeout configuration in Axios client (`EventService.ts`).
**Learning:** External API calls without explicit timeouts can lead to hanging requests, potentially causing resource exhaustion or client-side Denial of Service (DoS) if the server is unresponsive.
**Prevention:** Always define an explicit `timeout` (e.g., `timeout: 5000`) when creating an Axios instance or making external API calls to fail quickly and securely.
