## 2026-08-17 - Fix Todo List Accessibility and Visual State
**Learning:** Found several input elements (text, select, checkboxes) in the Todo list component without programmatic labels, causing screen readers to announce them as blank inputs. Additionally, discovered a CSS typo (`line-trought` instead of `line-through`) that broke the visual completion state for tasks.
**Action:** Next time, always check form inputs for associated labels or `aria-label`s, and double-check CSS values for state indicators to ensure visual feedback actually works as intended.
