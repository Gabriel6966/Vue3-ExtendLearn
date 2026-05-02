## 2024-05-18 - Added ARIA Labels to Todo Form
**Learning:** Native HTML elements bound with Vue v-model do not receive automatic accessible labels, and typos in dynamic CSS bindings fail silently.
**Action:** Always manually ensure accessible labeling (via aria-label or explicit <label>) for inputs and carefully verify dynamic style property names.
