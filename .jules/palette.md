## 2026-05-26 - Vue v-model bindings and dynamic styles
**Learning:** Native HTML form inputs bound to Vue's v-model do not automatically generate accessible labels, and typos in dynamic style bindings fail silently.
**Action:** Always provide explicit <label> or aria-label for v-model inputs, and explicitly verify CSS properties in dynamic bindings.
