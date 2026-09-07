## 2024-05-24 - Empty States for Filtered Lists
**Learning:** Dynamic lists with client-side filtering require clear empty states to distinguish between "no items exist" and "no items match the current filter", preventing user confusion.
**Action:** Always pair list renderings with a `v-else` empty state when filtering is involved.
