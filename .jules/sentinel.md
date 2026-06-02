## 2024-05-24 - Path Traversal / SSRF Prevention
**Vulnerability:** Dynamic route parameters appended directly to Axios API URLs without sanitization.
**Learning:** Vue Router parameters are passed as strings at runtime, even if typed as numbers. Direct concatenation can lead to Path Traversal or SSRF vulnerabilities if the API base URL is manipulated.
**Prevention:** Always sanitize dynamic inputs using `encodeURIComponent()` before appending them to API URLs.

## 2025-06-02 - Client-Side DoS Prevention via API Timeouts
**Vulnerability:** External API calls using Axios were lacking an explicit timeout configuration, creating a risk for hanging requests.
**Learning:** Without timeouts, unresponsive servers can cause client-side requests to hang indefinitely, tying up resources and leading to potential Denial of Service (DoS) conditions on the client.
**Prevention:** Ensure external API calls using Axios are configured with an explicit timeout (e.g., `timeout: 5000`) to enforce a limit on request durations.
