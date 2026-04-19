## 2026-04-19 - Native Vue Inputs need explicit Accessible Labels
**Learning:** Native HTML form inputs (<input>, <select>) bound to Vue's v-model do not automatically receive accessible labels, making them challenging for screen readers.
**Action:** When adding or modifying native form inputs bound with v-model, always ensure they receive explicit accessible labels (e.g., using aria-label or wrapping them in <label>).
