## 2024-04-09 - [Missing API Request Timeouts]
**Vulnerability:** External API requests via Axios lacked timeout configurations.
**Learning:** Default Axios instances do not have timeouts, leading to potential hanging requests and client-side DoS if the mock server or API is unresponsive.
**Prevention:** Always configure an explicit `timeout` when using `axios.create()` in frontend applications.
