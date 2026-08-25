## 2026-08-25 - Todo List Accessibility and UX Polish
**Learning:** Checkboxes in task lists require explicit ARIA labels for screen readers when relying on adjacent visual context, and filtered lists must provide clear empty states to reassure users when no results match. Additionally, typos in inline styles (e.g., `line-trought`) silently break visual feedback for state changes.
**Action:** Always verify inline CSS values, enforce empty states for any dynamic list component, and ensure interactive elements within loops have dynamically bound `aria-label`s tied to the item context.
