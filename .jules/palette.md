## 2026-08-27 - Empty States in Dynamic Lists
**Learning:** Users often assume dynamic lists (like Todo lists) that initialize as empty arrays are broken if there is no visual feedback.
**Action:** Always provide an explicit empty state (e.g., via `v-else`) for dynamic lists to guide users to the primary action.
