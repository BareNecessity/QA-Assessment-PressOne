
# 🧪 Test Plan for Todo.vue Component

## 🎯 Objective
Ensure the `Todo.vue` component behaves correctly under various user interactions using unit, integration, and E2E tests.

---

## 🧩 Test Types

| Type          | Purpose                                                                 |
|---------------|-------------------------------------------------------------------------|
| Unit Tests    | Validate internal logic (e.g. validation, computed values).             |
| Integration   | Verify components and DOM elements interact correctly.                  |
| E2E Tests     | Simulate real-world user scenarios from start to finish.                |

---

## 🚨 Test Priorities

1. **Validation** – Preventing empty or duplicate entries.
2. **Todo CRUD** – Adding and removing todo items.
3. **Filtering Logic** – Display filtering based on selection.
4. **UI Reactivity** – Ensuring UI reflects changes immediately.
5. **Edge Cases** – Handling rapid input, special characters.

---

## ✅ Test Cases

### 1. Add Valid Todo
- **Preconditions:** App is running; input field is empty.
- **Steps:** Type “Buy milk” and press Enter.
- **Expected:** “Buy milk” appears in list.

### 2. Prevent Empty Input
- **Preconditions:** App is running; input field is empty.
- **Steps:** Press Enter.
- **Expected:** Error “Todo cannot be empty” is shown.

### 3. Delete Todo
- **Preconditions:** One todo exists.
- **Steps:** Click “Delete” next to the todo.
- **Expected:** Todo is removed from the list.

### 4. Filter Short Todos
- **Preconditions:** Todos with various lengths exist.
- **Steps:** Choose “Short” from dropdown.
- **Expected:** Only todos with ≤10 characters are shown.

### 5. Rapid Duplicate Add
- **Preconditions:** App is running.
- **Steps:** Type “Test fast”, press Enter multiple times quickly.
- **Expected:** No UI issues; each item has a unique ID or duplicates are prevented.

---

