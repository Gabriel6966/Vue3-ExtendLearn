## 2024-05-18 - Missing API request timeout
**Vulnerability:** Axios instance lacked an explicit timeout setting.
**Learning:** Hanging API requests can cause the client to remain pending indefinitely, potentially leading to client-side Denial of Service (DoS) and poor user experience.
**Prevention:** Always specify an explicit `timeout` in milliseconds when configuring Axios or fetch clients.
