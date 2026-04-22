## 2026-04-22 - [Add API Timeout]
**Vulnerability:** Missing timeout on global Axios instance.
**Learning:** External API calls without explicit timeouts can lead to hanging requests and potential client-side Denial of Service (DoS) if the server is slow or unresponsive.
**Prevention:** Always configure an explicit `timeout` value (e.g., `timeout: 5000`) when creating an Axios instance to fail securely and free up client resources.
