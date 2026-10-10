## 2023-10-27 - Added timeout to Axios API calls
**Vulnerability:** Missing timeout configurations for the external API client.
**Learning:** The application was vulnerable to hanging indefinitely if the external API endpoint became slow or unresponsive, which could degrade user experience or cause a client-side denial of service. The centralized Axios instance configuration was an ideal place to apply a global timeout.
**Prevention:** Always define reasonable timeouts (e.g., 5000ms) for external network requests to fail fast and degrade gracefully.
