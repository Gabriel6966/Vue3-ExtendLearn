## 2024-05-15 - Missing visual feedback on completed states
**Learning:** In list components with custom styling for completed items (like text-decoration), syntax typos (e.g. line-trought) completely silently break the visual completion feedback, severely impacting UX.
**Action:** Always visually verify completion states with CSS tests or visual reviews; do not rely purely on boolean state changes.
