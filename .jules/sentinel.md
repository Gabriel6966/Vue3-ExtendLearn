## 2024-05-24 - Path Traversal / SSRF Prevention
**Vulnerability:** Dynamic route parameters appended directly to Axios API URLs without sanitization.
**Learning:** Vue Router parameters are passed as strings at runtime, even if typed as numbers. Direct concatenation can lead to Path Traversal or SSRF vulnerabilities if the API base URL is manipulated.
**Prevention:** Always sanitize dynamic inputs using `encodeURIComponent()` before appending them to API URLs.
## 2026-07-11 - Prevent Client-Side DoS with Axios Timeout
**Vulnerability:** External API calls using Axios were missing a timeout configuration, allowing requests to hang indefinitely.
**Learning:** In client-side applications, hanging requests can lead to resource exhaustion and a degraded user experience (DoS). Axios instances should explicitly configure a timeout.
**Prevention:** Ensure external API calls using Axios are configured with an explicit timeout (e.g., `timeout: 5000`).
