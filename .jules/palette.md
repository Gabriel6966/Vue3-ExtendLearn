## 2026-08-24 - Prevent empty task submission
**Learning:** Users can accidentally submit empty tasks if the submit button is not disabled when the required input is empty, leading to a confusing UX and cluttered state.
**Action:** Always bind the `:disabled` attribute of submit buttons to the required input state (e.g., `!newTask.label.trim()`) to provide immediate visual feedback and prevent empty submissions.
