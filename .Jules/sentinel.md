## 2025-07-02 - Prevent Hanging Requests
**Vulnerability:** Axios HTTP client was missing a timeout configuration, exposing the application to potential client-side Denial of Service (DoS) due to hanging requests.
**Learning:** Default Axios instances wait indefinitely for responses unless a timeout is specified.
**Prevention:** Always configure an explicit timeout (e.g., `timeout: 5000`) when creating Axios instances or configuring external API calls.
