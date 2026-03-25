## 2024-05-24 - [Path Traversal / SSRF via Unencoded Router Parameters]
**Vulnerability:** Path traversal and Server-Side Request Forgery (SSRF) was possible via unencoded router parameters being passed directly to the Axios API client.
**Learning:** Vue Router passes dynamic route parameters (`:id`) as strings. These strings can contain directory traversal characters (e.g., `../`). When appended directly to API URLs (e.g., `/events/` + id), they can cause the API client to access unintended paths on the server.
**Prevention:** Always sanitize and encode URL parameters using `encodeURIComponent()` before concatenating them into API request paths.
