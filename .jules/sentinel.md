## 2024-05-24 - Path Traversal / SSRF Prevention
**Vulnerability:** Dynamic route parameters appended directly to Axios API URLs without sanitization.
**Learning:** Vue Router parameters are passed as strings at runtime, even if typed as numbers. Direct concatenation can lead to Path Traversal or SSRF vulnerabilities if the API base URL is manipulated.
**Prevention:** Always sanitize dynamic inputs using `encodeURIComponent()` before appending them to API URLs.

## 2024-06-03 - State Bloat / Client-Side DoS via Unbounded Inputs
**Vulnerability:** Unbounded user input added directly to state arrays without length limits or trimming.
**Learning:** A malicious user or script could input massive strings into forms (like Todo tasks) that are pushed into memory, causing a client-side Denial of Service (DoS) via browser memory exhaustion or state bloat.
**Prevention:** Always validate and sanitize user inputs (e.g., using `trim()` and enforcing a maximum length) before appending them to application state, and include corresponding `maxlength` attributes in HTML inputs for UX.
