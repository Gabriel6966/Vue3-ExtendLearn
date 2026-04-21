## 2024-04-21 - Fix Vue v-model accessible labels
**Learning:** Native HTML form inputs bound to Vue v-model require explicit accessible labels (e.g., aria-label) and dynamic style spelling mistakes fail silently.
**Action:** Add explicit aria-labels for inputs and verify CSS property spellings explicitly when using Vue.
