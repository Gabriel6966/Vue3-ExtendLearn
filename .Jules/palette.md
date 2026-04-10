## 2026-04-10 - Native Input ARIA Requirements
**Learning:** Vue's v-model on native HTML inputs (`<input>`, `<select>`, `<checkbox>`) doesn't automatically generate accessibility labels. Many form elements in single-file components can lack proper context for screen readers.
**Action:** Always verify that native inputs and checkboxes have explicit `aria-label` attributes or wrapping `<label>` tags when auditing Vue components for accessibility.
