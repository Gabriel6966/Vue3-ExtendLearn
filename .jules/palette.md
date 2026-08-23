## 2024-05-24 - Visual feedback on completion
**Learning:** Subtle typos in CSS classes can cause visual feedback failures (like strike-throughs) for state changes without triggering application errors, leading to a confusing UX where completed items look identical to incomplete ones.
**Action:** Always verify state change visual feedback by actually rendering and testing the component, not just relying on code review.
