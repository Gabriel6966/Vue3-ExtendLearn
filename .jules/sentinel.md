## 2024-05-24 - Path Traversal / SSRF Prevention
**Vulnerability:** Dynamic route parameters appended directly to Axios API URLs without sanitization.
**Learning:** Vue Router parameters are passed as strings at runtime, even if typed as numbers. Direct concatenation can lead to Path Traversal or SSRF vulnerabilities if the API base URL is manipulated.
**Prevention:** Always sanitize dynamic inputs using `encodeURIComponent()` before appending them to API URLs.
## 2024-05-20 - Add timeout to external API calls
**Vulnerability:** Axios requests to external services lacked a timeout configuration, allowing requests to hang indefinitely if the server is unresponsive.
**Learning:** In a client-side application, missing timeouts can lead to a degraded user experience, resource exhaustion (browser connections/memory), and infinite loading states. This is a common oversight that leaves the application vulnerable to client-side Denial of Service.
**Prevention:** Always configure a reasonable `timeout` property when creating Axios instances or making fetch calls to external dependencies.
