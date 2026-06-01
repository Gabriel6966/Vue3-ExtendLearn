## 2024-05-24 - Path Traversal / SSRF Prevention
**Vulnerability:** Dynamic route parameters appended directly to Axios API URLs without sanitization.
**Learning:** Vue Router parameters are passed as strings at runtime, even if typed as numbers. Direct concatenation can lead to Path Traversal or SSRF vulnerabilities if the API base URL is manipulated.
**Prevention:** Always sanitize dynamic inputs using `encodeURIComponent()` before appending them to API URLs.
## 2024-06-01 - Add Axios Timeout
**Vulnerability:** Missing timeout configurations (Client-side Denial of Service / Hanging requests)
**Learning:** External API calls using Axios were configured without an explicit timeout, which can lead to hanging requests and potential client-side DoS in this application.
**Prevention:** Always configure an explicit timeout (e.g., `timeout: 5000`) for Axios instances making external API calls.
