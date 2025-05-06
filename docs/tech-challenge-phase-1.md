# [Tech Challenge] Phase 1

## General Questions

---

# EPIC 1: Project Setup and Environment Configuration

This epic defines the foundational structure for the project. It includes setup of development tools, styling framework, linting, testing, component isolation, and mock API services for early integration before backend availability.

---

## User Stories

### ✅ User Story 1: Initial Setup with Next.js, Tailwind and TypeScript

As a developer, I want to initialize the project with a solid base using Next.js, Tailwind, and TypeScript to ensure consistency and productivity.

**Tasks**

- [x] Initialize the project using `create-next-app` with TypeScript template
- [x] Install and configure TailwindCSS
- [x] Create base folder structure: `components`, `features`, `styles`, `types`, etc.
- [x] Create a base layout component to validate theme and global styles

---

### ✅ User Story 2: Configure ESLint, Prettier, and Code Style Standards

As a developer, I want to apply standardized rules for code linting and formatting to improve readability and prevent bugs.

**Tasks**

- [x] Install useful libraries
  - Install and configure `eslint`, `prettier`, `eslint-plugin-react`, `eslint-config-prettier`
- [x] Configure the libraries
  - Use ESLint Flat Config via `eslint.config.mjs`
  - Create `.prettierrc` and `.prettierignore`
  - Add lint script to `package.json`
- [x] Setup VSCode integration via `.vscode/settings.json`

### User Story 3: Setup Storybook for Component Development

As a developer, I want to build and preview UI components in isolation using Storybook.

Note: Suggestion to components have their storybook in the same directory.

**Tasks**

- Install Storybook using `npx storybook@latest init`
- Integrate with Tailwind and global theme provider
- Add scripts to `package.json` for `storybook` and `build-storybook`

### ✅ User Story 4: Configure Testing with Vitest and RTL

As a developer, I want to ensure component quality and correctness using unit tests.

**Tasks**

- [x] Install Tools
  - install `vitest`, `@testing-library/react`, `@testing-library/jest-dom`
- [x] Configuration Create `vitest.config.ts` with aliases and globals
  - Create test folder or use `.test.tsx` pattern
  - Add scripts: `test`, `test:watch`, `test:coverage`
  - Create basic test for base components

### ✅ User Story 6: Automate Quality Checks with Git Hooks

As a developer, I want to enforce quality through pre-commit checks using Husky and lint-staged.

**Tasks**

- [x] Install libraries
  - install and configure `husky`, `lint-staged`
- [x] Create `pre-commit` and `pre-push` hooks
  - `pre-commit`: run eslint, prettier, and vitest
  - `pre-push`: run `vitest --coverage`

---

# EPIC 2: Home Page and Global Layout

This epic focuses on implementing the main page structure and layout components that are reused across the application.

It includes the responsive Home Page, layout elements like the header, sidebar, and mobile navigation, and functional sections like welcome card, transaction form, and extract list.

This also includes foundational work for consistency and maintainability: unit tests, Storybook, and mocked data structure simulating a BFF layer.

---

## User Stories

### User Story 1: Welcome Message and Balance Card

As a user, I want to see a personalized welcome message and account balance.

**Tasks**

- [Component] Create `BalanceCard` component with:
  - Greeting text: "Olá, Joana! :)"
  - Date (dynamic)
  - "Saldo" label with eye toggle
  - "Conta Corrente" and value (currency formatted)
- [Style] Add responsive illustration (mobile/tablet)
- [Style] Make layout responsive and match Figma spacing
- [API Integration] Add mocked data source (simulate API return for balance and user name)
- [Test] Write unit test to verify rendering of values
- [Component] Create Storybook story for isolated testing
- [UI Flow] Integrate into `HomePage.tsx`

### User Story 2: Start a New Transaction

As a user, I want to start a new transaction directly from the homepage.

**Tasks**

- [Component] Create `TransactionForm` component:
  - Title "Nova transação"
  - Select input for transaction type
  - Number input for value
  - Submit button
  - Handle all states: hover, active, disabled
  - Add form validation (disable submit on empty)
  - Add illustration on bottom-right corner (differs by view)
- [Component] Create Storybook with different states
- [Test] Write unit test to check form interactivity and input values
- [Page Integration] Integrate in `HomePage.tsx` under the balance card
- [API Integration] Load types from mocked BFF API
- [API Integration] Simulate a transaction creation
- [UI Flow] Success case: update balance and extract list
- [UI Flow] Error case: show feedback message

---

### User Story 3: View Latest Transactions (Extrato)

As a user, I want to view the latest transactions in a quick extract list.

**Tasks**

- [Component] Create `TransactionList` component
- [Component] Create reusable `TransactionItem` component:
  - Month label, type (Depósito, Transferência), value, and date
  - Edit/Delete icons
  - Color-code transaction values: green (depósito), red (transferência)
- [Component] Create Storybook examples with different transaction types
- [Test] Write test: render and click interaction
- [Page Integration] Integrate to right box in desktop view, and full section in mobile/tablet
- [API Integration] Simulate response using local mock of recent transactions

### User Story 4: Responsive Navigation Menu

As a user, I want to navigate the app using a responsive menu.

**Tasks**

- [Component] Create `SidebarMenu` (desktop):
  - Route items: Início, Transferências, etc.
  - Highlight active page
- [Component] Create `TopMenu` (tablet):
  - Horizontal layout of menu items
  - Active route indicator
- [Component] Create `HamburgerMenu` (mobile):
  - Open/close toggle
  - Slide-down behavior
- [Component] Create Storybook entries for each variant
- [Test] Write test: visibility of correct menu on viewport change
- [Page Integration] Integrate into `Layout.tsx`

### User Story 5: Global Layout and Page Wrapper

As a user, I want to have a consistent layout and header across all pages.

**Tasks**

- [Component] Create `Layout.tsx` wrapper:
  - Compose sidebar/header/body according to screen size
  - Add responsive grid layout for desktop/tablet/mobile
  - Apply padding and margin rules from Figma
- [Component] Create `Header.tsx` with:
  - Logo (left)
  - User name and avatar (right)
- [Component] Create Storybook layout example with children slot
- [Test] Create test to check if layout wraps content correctly
- [Page Integration] Use `Layout` wrapper in Home and all other pages

### ✅ User Story 6: Developer Mock Backend Strategy

As a developer, I want to simulate API behavior using a mock layer so that frontend integration is consistent before the real backend is available.

**Tasks**

- [Structure] Define folder structure for `mock/api`
- [Model] Create mock endpoints for:
  - User info
  - Balance
  - Transaction list
  - Transaction types
- [API Layer] Create fetch wrapper (e.g., `fetchWithDelay`) for mocking latency
