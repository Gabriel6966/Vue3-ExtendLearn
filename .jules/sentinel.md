## 2024-05-24 - Path Traversal / SSRF Prevention
**Vulnerability:** Dynamic route parameters appended directly to Axios API URLs without sanitization.
**Learning:** Vue Router parameters are passed as strings at runtime, even if typed as numbers. Direct concatenation can lead to Path Traversal or SSRF vulnerabilities if the API base URL is manipulated.
**Prevention:** Always sanitize dynamic inputs using `encodeURIComponent()` before appending them to API URLs.
## 2024-05-18 - [Security Enhancement: Axios Timeout]
**Vulnerability:** Missing timeout configurations on external API calls using Axios.
**Learning:** The application was vulnerable to hanging requests and potential client-side Denial of Service (DoS) due to the lack of an explicit timeout in the global Axios client instance (`apiClient`). This could cause the application to become unresponsive if the backend server was slow or unreachable.
**Prevention:** Always configure an explicit timeout (e.g., `timeout: 5000`) when creating Axios instances to ensure requests fail fast and gracefully instead of hanging indefinitely.
