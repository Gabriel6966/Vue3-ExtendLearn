## 2024-05-24 - Path Traversal / SSRF Prevention
**Vulnerability:** Dynamic route parameters appended directly to Axios API URLs without sanitization.
**Learning:** Vue Router parameters are passed as strings at runtime, even if typed as numbers. Direct concatenation can lead to Path Traversal or SSRF vulnerabilities if the API base URL is manipulated.
**Prevention:** Always sanitize dynamic inputs using `encodeURIComponent()` before appending them to API URLs.
## 2025-02-24 - Missing Timeout Configurations
**Vulnerability:** Missing timeout configurations for external API calls using Axios.
**Learning:** Default Axios requests do not have timeouts and could result in hanging requests and resource exhaustion.
**Prevention:** Always add a reasonable timeout configuration (e.g., timeout: 10000) when instantiating Axios clients or making individual requests.
