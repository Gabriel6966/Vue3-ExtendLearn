## 2024-05-18 - Missing ARIA Labels and CSS Typo in Todo Form
**Learning:** Native HTML form inputs bound to Vue's v-model do not automatically generate accessible labels, rendering them inaccessible to screen readers. Furthermore, typos in dynamic style bindings (like 'text-decoration:line-trought') fail silently in Vue.
**Action:** Always provide explicit accessible labels (e.g., using aria-label) for inputs and selects, especially in v-for loops, and manually verify CSS property spellings.
