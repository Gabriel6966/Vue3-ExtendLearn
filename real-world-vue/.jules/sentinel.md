## 2024-05-27 - Missing Input Validation in Form Submission
**Vulnerability:** The Todo list component allowed submission of empty tasks and unbounded task lengths (DoS risk).
**Learning:** Vue's `v-model` binding does not automatically enforce validation or length constraints on the underlying state before submission functions are called.
**Prevention:** Always implement explicit server-side-equivalent validation (trimming, length limits, non-empty checks) in the submission handler functions of Vue components.
