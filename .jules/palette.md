## 2026-05-11 - Vue Forms and Styles Accessibility
**Learning:** Vue's `v-model` binding on native HTML inputs does not automatically generate accessible labels, requiring explicit `aria-label` attributes. Also, typos in dynamic `:style` bindings fail silently, breaking visual states without errors.
**Action:** Always verify dynamic style strings explicitly and add `aria-label` or `<label>` elements to all `v-model` bound form inputs for accessibility.
