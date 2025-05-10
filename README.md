# 🧪 QA Engineer Take-Home Assessment

Hi there! Thanks for your interest in the QA Engineer role. This take-home assessment is designed to evaluate your approach to testing, attention to detail, and ability to work with modern front-end tools (specifically Vue.js).

Please read all instructions carefully. You will submit your work as a GitHub repo (preferred).

---

## 📝 What You’ll Do

You’ll work with a small Vue.js app we’ve provided and complete 4 tasks:

### 1. Test Plan & Test Cases

Using the feature described in `src/components/Todo.vue`:

- Write a high-level **Test Plan** (1 page max) that outlines what types of tests should be written (unit, integration, E2E) and what the priorities are.
- Include at least **5 detailed Test Cases**, each with:
  - Description
  - Preconditions
  - Steps to Reproduce
  - Expected Result

Save as: `test-plan.md`

---

### 2. Unit Tests

Use the file `src/components/Todo.vue`. It’s a simple todo input form with add/delete functionality and validation.

- Write **3 unit tests** using [vue-test-utils](https://test-utils.vuejs.org/guide/):
  1. A computed property or watcher
  2. A user interaction (e.g. add or delete)
  3. An edge case (e.g. submitting empty input)

- Save your tests under: `tests/unit/Todo.spec.js`
- Include a short markdown or screencast:
  - Explain any mocking you had to do
  - Show a failing test and how you fixed it

---

### 3. E2E Test + Retry Logic

Use the demo app provided (we recommend serving it with `npm run dev`).

Write an **E2E test** using [Playwright](https://playwright.dev/) that:

- Logs in via the fake login form (`/login`)
- Creates 3 todos
- Deletes one todo item, then verifies it no longer appears in the list. Ensure the filter reflects the change correctly.
- Logs out

Save test as: `e2e/todo-flow.spec.js`

In `e2e/README.md`, briefly explain:
- How you handled flakiness
- How you’d report test failures
- How this fits into CI

---

### 4. Bug Investigation (Write-up)

In the provided file `bug-report/duplicate-items.txt`, you'll find a user-reported issue.

Write a short bug analysis:
- **Steps to Reproduce** (based on your testing)
- **Your Root Cause Hypothesis**
- **How to prevent regression**

Save as: `bug-report/analysis.md`

---

## 📦 Project Structure

Here's what you'll find in the repo:

```aiignore
src/
├── components/
│   └── Todo.vue            ← Main test target
├── views/
│   └── Login.vue           ← Simple login screen
├── App.vue
└── main.js

e2e/                        ← Your E2E tests go here

tests/
└── unit/                   ← Your unit tests go here

bug-report/
├── duplicate-items.txt     ← Provided bug report
└── analysis.md             ← Candidate writes this

test-plan.md                ← Candidate writes this
```

---

## ✅ Submission

Once you're done, please:

- Please provide a link to a GitHub repository containing your code. Share the link via email to careers@pressone.co. Ensure to make the repo public.

We're looking forward to your work! 🙌
