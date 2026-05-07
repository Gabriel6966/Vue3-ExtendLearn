## 2024-05-24 - Path Traversal / SSRF Prevention
**Vulnerability:** Dynamic route parameters appended directly to Axios API URLs without sanitization.
**Learning:** Vue Router parameters are passed as strings at runtime, even if typed as numbers. Direct concatenation can lead to Path Traversal or SSRF vulnerabilities if the API base URL is manipulated.
**Prevention:** Always sanitize dynamic inputs using `encodeURIComponent()` before appending them to API URLs.
## 2026-05-07 - [Axios Timeout Protection]
**Vulnerability:** External API calls lacked an explicit timeout, posing a client-side DoS risk through hanging requests.
**Learning:** By default, Axios does not have a timeout and waits indefinitely for a response.
**Prevention:** Ensure external API calls using Axios are configured with an explicit timeout.
