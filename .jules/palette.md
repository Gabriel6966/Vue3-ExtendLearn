## 2024-05-18 - Missing Empty State for Dynamic List
**Learning:** Dynamic lists initialized as empty arrays lack feedback, making the UI appear unresponsive or incomplete to users and screen readers.
**Action:** Add an explicit empty state (e.g., `v-if` / `v-else`) with helpful text to guide users when no items are present.
