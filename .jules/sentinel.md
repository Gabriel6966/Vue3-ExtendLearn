## 2024-05-24 - Path Traversal / SSRF Prevention
**Vulnerability:** Dynamic route parameters appended directly to Axios API URLs without sanitization.
**Learning:** Vue Router parameters are passed as strings at runtime, even if typed as numbers. Direct concatenation can lead to Path Traversal or SSRF vulnerabilities if the API base URL is manipulated.
**Prevention:** Always sanitize dynamic inputs using `encodeURIComponent()` before appending them to API URLs.
## 2026-05-14 - Missing Axios Timeout
**Vulnerability:** Missing timeout configurations on Axios instance
**Learning:** The application was vulnerable to hanging requests and potential client-side Denial of Service (DoS) due to external API calls lacking an explicit timeout.
**Prevention:** Always configure an explicit timeout (e.g., timeout: 5000) when creating Axios instances.
