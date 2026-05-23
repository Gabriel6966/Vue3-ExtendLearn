## 2024-05-24 - Path Traversal / SSRF Prevention
**Vulnerability:** Dynamic route parameters appended directly to Axios API URLs without sanitization.
**Learning:** Vue Router parameters are passed as strings at runtime, even if typed as numbers. Direct concatenation can lead to Path Traversal or SSRF vulnerabilities if the API base URL is manipulated.
**Prevention:** Always sanitize dynamic inputs using `encodeURIComponent()` before appending them to API URLs.
## 2024-05-27 - Added timeout to API Requests
**Vulnerability:** Axios requests missing a timeout setting.
**Learning:** External API calls without a timeout can lead to hanging requests and potential client-side Denial of Service (DoS).
**Prevention:** Ensure external API calls using Axios are configured with an explicit timeout.
