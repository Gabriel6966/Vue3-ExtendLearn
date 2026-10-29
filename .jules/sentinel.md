## 2023-11-20 - Input Length Validation
**Vulnerability:** Missing input length validation on user form
**Learning:** Found an input without a maxlength attribute, which can be a risk for DoS or state bloat.
**Prevention:** Ensure that text inputs have a maxlength attribute.
