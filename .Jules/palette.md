## 2023-10-15 - Empty States & Visual Feedback
**Learning:** In interactive lists like Todo components, missing empty states leave users wondering if a filter worked or if the list is just broken. Furthermore, misspelled CSS properties (like `line-trought`) completely break visual feedback for state changes (like task completion).
**Action:** Always provide explicit empty states for filtered lists, and carefully verify CSS values for state-driven styles to ensure visual feedback is actually rendered.
