## 2024-05-24 - Path Traversal / SSRF Prevention
**Vulnerability:** Dynamic route parameters appended directly to Axios API URLs without sanitization.
**Learning:** Vue Router parameters are passed as strings at runtime, even if typed as numbers. Direct concatenation can lead to Path Traversal or SSRF vulnerabilities if the API base URL is manipulated.
**Prevention:** Always sanitize dynamic inputs using `encodeURIComponent()` before appending them to API URLs.
## 2024-05-18 - Missing Axios Timeout
**Vulnerability:** External API calls to the mock backend using Axios in `EventService.ts` did not have an explicit timeout configured.
**Learning:** The application is vulnerable to hanging requests and potential client-side Denial of Service (DoS) if the backend server becomes unresponsive or slow, since requests will not naturally time out.
**Prevention:** Always configure an explicit timeout (e.g., `timeout: 5000`) for all external API calls using HTTP clients like Axios to ensure the client fails securely and promptly.
