## 2024-05-19 - Wrapping list item checkboxes in accessible native labels
**Learning:** In Vue apps (and web apps in general), users often have to struggle clicking a tiny checkbox to toggle a task status. Wrapping custom check elements in a native `<label>` implicitly increases the hit area to the full container (checkbox + label text) without requiring complex JS click handlers, providing a great, accessible pattern for list items.
**Action:** When reviewing list items with checkboxes or radios, always check if they are wrapped in a `<label>` tag to improve the click area and overall accessibility on both desktop and mobile devices.

## 2025-03-08 - Nested element hover vs focus animations
**Learning:** When links (`<RouterLink>`) wrap entire cards or components, designers often put the hover animation (like `transform: scale`) on the inner element (`.event-card:hover`). However, keyboard users focus the link, not the inner div, so they miss the visual feedback!
**Action:** Always map focus-visible on the interactive parent to the visual state of the animated child: `.link:focus-visible .child { transform: ... }` to ensure keyboard users get the same interaction cues as mouse users.
