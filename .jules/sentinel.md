## 2024-05-24 - Path Traversal / SSRF Prevention
**Vulnerability:** Dynamic route parameters appended directly to Axios API URLs without sanitization.
**Learning:** Vue Router parameters are passed as strings at runtime, even if typed as numbers. Direct concatenation can lead to Path Traversal or SSRF vulnerabilities if the API base URL is manipulated.
**Prevention:** Always sanitize dynamic inputs using `encodeURIComponent()` before appending them to API URLs.
## 2026-08-15 - Prevent indefinite hanging in API requests
**Vulnerability:** Axios configuration lacked a timeout, leaving the application vulnerable to resource exhaustion or indefinite hanging if the backend server becomes unresponsive.
**Learning:** API clients without strict timeouts can cause the frontend application to stall, degrading user experience and potentially leading to denial-of-service conditions on the client side.
**Prevention:** Always configure a reasonable timeout (e.g., `timeout: 5000`) when instantiating network clients like Axios.
