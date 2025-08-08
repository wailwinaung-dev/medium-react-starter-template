# Medium React Starter Template

A modern frontend web application built with **React 19**, **Vite**, **Tailwind CSS**, **TanStack Query/Table/Form**, **Zustand**, and **Zod**. This project uses modular UI components powered by Shadcn UI`.

---

## 🛠️ Tech Stack

| Technology                                         | Description                        |
| -------------------------------------------------- | ---------------------------------- |
| [React 19](https://reactjs.org/)                   | Core frontend library              |
| [Vite](https://vitejs.dev/)                        | Fast build tool                    |
| [Tailwind CSS 4](https://tailwindcss.com/)         | Utility-first CSS framework        |
| [TanStack](https://tanstack.com/)                  | React Query, Table, and Form       |
| [Shadcn UI](https://www.radix-ui.com/)             | Unstyled accessible UI components  |
| [Zod](https://github.com/colinhacks/zod)           | TypeScript-first schema validation |
| [Zustand](https://github.com/pmndrs/zustand)       | Lightweight state management       |
| [React Router v7](https://reactrouter.com/en/main) | Client-side routing                |

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/wailwinaung-dev/medium-react-starter-template.git
cd medium-react-starter-template

```

### 2. Install dependencies

```bash
npm install

```

### 3. Start the development server

```bash
npm run dev
```

App will be running at http://localhost:5173

### 📁 Project Structure

```graphql
src/
├── api/ # API logic
│ ├── axios/ # Axios instance
│ ├── mocking/ # Local mock data
│ ├── queries/ # React Query hooks
│ ├── quey-keys/ # Query keys (typo: should be "query-keys")
│ ├── schema/ # API response schemas
│ └── services/ # Service functions for endpoints
├── assets/ # Static assets (images, fonts)
├── components/ # Shared UI components
│ ├── data-table/ # Table components using TanStack
│ ├── layouts/ # Layout wrappers (e.g., dashboard layout)
│ ├── pages/ # Page-level component wrappers
│ ├── tanstack-form/ # Form abstractions using TanStack Form
│ └── ui/ # UI primitives (buttons, modals, etc.)
├── hooks/ # Custom reusable hooks
├── lib/ # Utilities, constants, helper functions
├── pages/ # Route-level pages (grouped by feature)
│ ├── auth/ # Auth (login/register)
│ │ ├── components/ # Auth-related components
│ │ └── types/ # Auth-related types
│ ├── dashboard/ # Dashboard-related pages
│ │ └── components/
│ └── transaction/ # Transaction-related pages
│ ├── components/
│ └── types/
├── routes/ # React Router v7 route definitions
└── stores/ # Zustand stores (state management)

```
