## 2024-05-24 - Path Traversal / SSRF Prevention
**Vulnerability:** Dynamic route parameters appended directly to Axios API URLs without sanitization.
**Learning:** Vue Router parameters are passed as strings at runtime, even if typed as numbers. Direct concatenation can lead to Path Traversal or SSRF vulnerabilities if the API base URL is manipulated.
**Prevention:** Always sanitize dynamic inputs using `encodeURIComponent()` before appending them to API URLs.

## 2023-10-24 - Added input length limits to Todo creation
**Vulnerability:** Missing input length limits on Todo creation could lead to state bloat or minor DoS risk.
**Learning:** The Todo application did not limit the length of the string input in the frontend, allowing for potential performance degradation or state bloat from excessively long inputs.
**Prevention:** Added a `maxlength="100"` attribute to the input element and a JavaScript length validation check in `addTask` to prevent submission of large inputs.
