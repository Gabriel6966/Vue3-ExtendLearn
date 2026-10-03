## 2023-10-26 - Contrast issues with plain text in #layout
**Learning:** The `#layout` element forces a global text color (`#2c3e50`) that fails contrast checks on dark mode backgrounds for plain text elements like `<div>` or `<span>`. Heading tags (e.g., `<h3>`) are safe because they explicitly inherit `var(--color-heading)` (`#ffffff`).
**Action:** When adding empty states or unstyled text components, always wrap them in heading tags instead of generic containers to maintain accessibility and readability in dark mode.
