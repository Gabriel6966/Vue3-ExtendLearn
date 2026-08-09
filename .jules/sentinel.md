## 2024-05-24 - Path Traversal / SSRF Prevention
**Vulnerability:** Dynamic route parameters appended directly to Axios API URLs without sanitization.
**Learning:** Vue Router parameters are passed as strings at runtime, even if typed as numbers. Direct concatenation can lead to Path Traversal or SSRF vulnerabilities if the API base URL is manipulated.
**Prevention:** Always sanitize dynamic inputs using `encodeURIComponent()` before appending them to API URLs.
## 2024-08-09 - Adding timeout configuration to external API calls
**Vulnerability:** Missing timeout configurations for Axios requests in `EventService.ts`.
**Learning:** The centralized Axios client used to fetch events from the backend lacked a timeout configuration. Without a timeout, a slow or unresponsive backend could cause the frontend application to hang indefinitely, tying up resources or degrading the user experience.
**Prevention:** Ensure that all initialized Axios or external HTTP clients enforce a default timeout.
