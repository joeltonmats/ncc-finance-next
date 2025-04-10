# [Tech Challenge] Phase1

# General Questions

1. What does it means edit or delete transaction from extract? I didn't notice any UI for this

# EPIC 2: Home Page and Global Layout

This epic focuses on implementing the main page structure and reusable layout components that are common across the application.
It includes the responsive home page, core layout elements like the header, sidebar, and mobile navigation, as well as static sections such as the welcome card and transaction preview.

This epic will lay the foundation for consistent UI and navigation across the app.

## User Stories Overview

1. As a user, I want to see a personalized welcome message and account balance.
2. As a user, I want to start a new transaction directly from the homepage.
3. As a user, I want to view the latest transactions in a quick extract list.
4. As a user, I want to navigate the app using a responsive menu that adapts to my device.
5. As a user, I want to have a consistent layout and header across all pages of the app.

## User Stories Description

### User Story 1: Welcome Message and Balance Card

As a user, I want to see a personalized welcome message and account balance.
Tasks:

1. Create BalanceCard component with:
   - User greeting ("Olá, Joana! :)"
   - Current date
   - "Saldo" label, eye toggle, underline
   - "Conta Corrente" label and styled value (R$ 2.500,00)
2. Add illustration (different for desktop/tablet/mobile) -- maybe for desktop view is error dont have the illustration
3. Make layout responsive and visually match spacing from Figma

### User Story 2: Start a New Transaction

As a user, I want to start a new transaction directly from the homepage.
Tasks:

1. Create TransactionForm component with:
   - Title Nova transacao
   - Input select: "Selecione o tipo de transação"
   - Input number: Valor
   - Button: "Concluir transação"
2. Use styles: rounded borders, spacing, green primary button
3. Support all dropdown states shown in UI (hover, active, disabled)
4. Add illustration (different for desktop/tablet/mobile)

### User Story 3: View Latest Transactions (Extrato)

As a user, I want to view the latest transactions in a quick extract list.

Tasks:

1. Create TransactionList component
2. Create reusable TransactionItem:
   - Month label ("Novembro")
   - Suggestion: Color-coded value (green for depósito, red for transferência)
   - Date aligned right
3. Add edit/delete icons
4. Make list scrollable when reach a certain number of transactions,
5. Support to responsivity in different devices view

### User Story 4: Responsive Navigation Menu

As a user, I want to navigate the app using a responsive menu that adapts to my device.

Tasks:

- Create SidebarMenu component (desktop)
  - Items: Início, Transferências, Investimentos, Outros serviços
  - Current route highlighted (green underline, green text)
- Create a TopMenu component (tablet)
  - Items: Início, Transferências, Investimentos, Outros serviços
  - Current route highlighted (green underline, green text)
  - Analyze the possibility to use the same SidebarMenu that behaviors different based on viewport
- Create MobileMenu and Hamburger logic:
  - Show hamburger icon
  - Slide down menu
  - Current page indicator (underline and bold)
  - Implement close icon

### User Story 5: Global Layout and Page Wrapper

As a user, I want to have a consistent layout and header across all pages of the app.

Tasks:

- Create Layout.tsx component to wrap all pages
- Create Header.tsx component with:
  - Suggestion: Logo left
  - User name and Profile icon in the right
- Handle page structure with grid layout component
  - Desktop: left sidebar, main content, right box for extract
  - Other devices: adjust gird system according to the view
- Add padding/margins based on device sizes
