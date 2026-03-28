## 2024-05-24 - [Path Traversal / SSRF Prevention in API Client]
**Vulnerability:** Unsanitized dynamic user input was passed directly into Axios GET requests (`apiClient.get('/events?_per_page=' + perPage + '&_page=' + page)` and `apiClient.get('/events/' + id)`).
**Learning:** In Vue apps using dynamic router parameters, values passed to API calls as strings can potentially be exploited to alter the intended path (Path Traversal) or query structure if they are not encoded properly. This applies to all URL parameters.
**Prevention:** Always use `encodeURIComponent()` to sanitize dynamic inputs before appending them to URL strings in API calls, particularly those derived from URL parameters or user inputs.
