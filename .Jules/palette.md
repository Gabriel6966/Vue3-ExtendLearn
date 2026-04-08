## 2026-04-08 - Dynamic ARIA labels on v-for items
**Learning:** When generating interactive elements inside a v-for loop, dynamic ARIA labels using item properties (e.g. `:aria-label="'Mark ' + item.name"`) significantly improve screen reader context without changing visual layout.
**Action:** Use dynamic bindings (`:`) for aria attributes in repeated lists or tables to ensure each element is uniquely identifiable by assistive tech.
