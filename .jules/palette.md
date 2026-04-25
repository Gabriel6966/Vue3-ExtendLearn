## 2026-04-25 - Typo in Vue dynamic style binding breaks UI silently
**Learning:** When using dynamic style bindings like `:style` in Vue, typos in CSS properties (e.g. `line-trought` instead of `line-through`) will fail silently, preventing critical visual feedback (like completion state) without throwing console errors.
**Action:** Double-check CSS property spelling in dynamic style bindings, as standard linters might not catch them, and ensure visual states are tested.
