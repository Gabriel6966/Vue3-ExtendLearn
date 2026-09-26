## 2024-09-26 - Empty states in dark mode
**Learning:** In the real-world-vue app, the #layout element forces a global text color (#2c3e50) that fails contrast checks on dark mode backgrounds.
**Action:** When adding plain text elements like empty states without custom CSS, use heading tags (e.g., <h3>) instead of <div> or <span> to explicitly inherit var(--color-heading) (#ffffff) for proper readability.
