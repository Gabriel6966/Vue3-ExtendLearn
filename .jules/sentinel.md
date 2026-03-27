## 2024-05-27 - Vue Router Parameters SSRF/Path Traversal
**Vulnerability:** Vue Router parameters (`id`, `page`, etc) passed to Axios API URLs without sanitization. Even if TypeScript typed as `number` in props, Vue Router params are passed as strings at runtime. This allows Path Traversal or SSRF via URL manipulation.
**Learning:** TypeScript type `number` on Vue component props populated by Vue Router parameters is an illusion. The runtime value remains a string. When concatenating these directly to API paths in `axios.get()`, they are evaluated directly, enabling traversal.
**Prevention:** Always sanitize dynamic parameters using `encodeURIComponent()` before appending them to API URLs, especially those sourced from the URL/router.
