## 2025-02-23 - Avoid hardcoded text color in empty states
**Learning:** In the `real-world-vue` project, `var(--color-text)` does not actually exist. The global text color `#2c3e50` is inherited from `#layout`. Using plain tags like `<span>` inside empty states inherits this correctly, which ensures good contrast.
**Action:** When adding simple text elements without custom CSS, prefer standard block/inline tags without adding styles.
