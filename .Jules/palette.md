## 2024-05-24 - Keyboard Focus and Pagination Loading State
**Learning:** Keyboard users lose track of focus when Vue Router links map to complex nested components, and screen readers get no feedback on simulated pagination when components are temporarily cleared.
**Action:** Always link `.event-link:focus-visible` to style its inner `.event-card` container to preserve visual focus, and add `aria-live="polite"` loading states specifically when components intentionally `null` data structures between fetch calls.
