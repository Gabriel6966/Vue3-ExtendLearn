## 2024-05-18 - Missing Axios Timeout
**Vulnerability:** External API calls lacked a timeout configuration.
**Learning:** This exposes the application to hanging requests and potential client-side Denial of Service (DoS) if the server fails to respond.
**Prevention:** Always configure an explicit `timeout` (e.g., 5000ms) when creating Axios instances or making requests to prevent infinite waits.
