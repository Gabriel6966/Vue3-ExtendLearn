## 2026-10-25 - Todo List ARIA Filter Buttons
**Learning:** Using generic buttons to filter a list without indicating the active state is confusing for screen readers, as they don't know which filter is currently applied.
**Action:** Always add :aria-pressed="condition" to filter or tab-like buttons to explicitly communicate the active state to assistive technologies.
