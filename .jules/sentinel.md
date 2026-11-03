## 2024-05-24 - Path Traversal / SSRF Prevention
**Vulnerability:** Dynamic route parameters appended directly to Axios API URLs without sanitization.
**Learning:** Vue Router parameters are passed as strings at runtime, even if typed as numbers. Direct concatenation can lead to Path Traversal or SSRF vulnerabilities if the API base URL is manipulated.
**Prevention:** Always sanitize dynamic inputs using `encodeURIComponent()` before appending them to API URLs.

## 2024-11-03 - Input Validation and Length Limits for Vue State
**Vulnerability:** User inputs appended directly to state arrays without length limits or trimming can cause state bloat or DoS, and silent submission failures occur without client-side HTML boundaries.
**Learning:** Object spread syntax (`...state.newTask`) preserves original unfiltered inputs. Validation and sanitization need to explicitly override properties (e.g., `label: sanitizedLabel`) to be effective.
**Prevention:** Always sanitize/trim strings, enforce input limits via `substring` in JS and `maxlength` in HTML, and ensure explicitly sanitized values are pushed to state arrays.
