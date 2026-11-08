## 2024-05-24 - Path Traversal / SSRF Prevention
**Vulnerability:** Dynamic route parameters appended directly to Axios API URLs without sanitization.
**Learning:** Vue Router parameters are passed as strings at runtime, even if typed as numbers. Direct concatenation can lead to Path Traversal or SSRF vulnerabilities if the API base URL is manipulated.
**Prevention:** Always sanitize dynamic inputs using `encodeURIComponent()` before appending them to API URLs.
## 2024-05-18 - Missing input bounds in state arrays
**Vulnerability:** Reactive state arrays (like task lists) accepting unbounded input strings can lead to state bloat, memory exhaustion (DoS), and degraded client-side performance.
**Learning:** Vue's reactivity system tracks these large strings, exacerbating the performance hit compared to standard vanilla JS arrays. This is an application architecture vulnerability because the local state directly reflects unbounded user input.
**Prevention:** Always combine client-side bounds checking before pushing to state with corresponding `maxlength` HTML attributes on the inputs to ensure consistent UX and state security.
