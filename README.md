# 📚 Library Management System — Client

A clean, minimal, and interactive library management frontend built with modern tools like **React**, **Redux Toolkit Query**, **TypeScript**, and **Tailwind CSS**.  
Easily add, edit, delete, and borrow books — all through a seamless UI powered by reusable components and efficient API integration.

---

## ✨ Key Highlights

- ⚡ Fast and responsive SPA built with Vite + React  
- 🔄 Powerful data fetching using RTK Query  
- 🔒 Type-safe with TypeScript interfaces  
- 🎨 Beautiful UI with Tailwind CSS + shadcn/ui  
- 🔔 Instant feedback with toast (sonner)  
- 🧩 Reusable modal and table components  
- 📦 RESTful API integration for backend connectivity  

---

## 🚀 Core Features

Here’s what users can do with the app:

1. **📚 Browse All Books** — Instantly view all available books in a dynamic table format  
2. **➕ Add New Book** — Add a new book with essential details using a responsive modal form  
3. **✏️ Edit Book Information** — Update any book’s data including title, author, genre, and more  
4. **🗑️ Delete a Book** — Remove any unwanted or outdated book entries  
5. **📖 Borrow a Book** — Borrow available books and track their availability in real-time  

---

## 🧠 Tech Stack

| Tech                         | Description                          |
|------------------------------|------------------------------------|
| **React**                    | UI library for building components |
| **Redux Toolkit Query**      | RTK Query for async API interaction|
| **TypeScript**               | Static typing and code safety       |
| **Tailwind CSS**             | Utility-first CSS framework         |
| **shadcn/ui**                | Accessible & elegant UI components  |
| **React Hook Form**          | Forms with built-in validation      |
| **Sonner**                   | Toast-based notifications           |

---

## 📁 Folder Structure

```plaintext
src/
├── api/                      # RTK Query API slice
│   └── bookApi.ts            # Book-related API endpoints
├── components/               # Reusable UI components
│   ├── BookTable.tsx         # Table component to list books
│   ├── AddTaskModal.tsx      # Reusable modal for Add/Edit book
│   └── ...                   # Other reusable UI components
├── constants/                # Constants like genre list, etc.
│   └── index.ts              # Genre enum or static lists
├── pages/                    # Page-level components/routes
│   ├── Home.tsx              # Home page with all books
│   ├── AddBook.tsx           # Page for adding a new book
│   └── ...                   # Future pages (e.g., Borrow Summary)
├── redux/                    # Redux store setup
│   ├── store.ts              # Configures Redux store
│   └── ...                   # Any future slices
├── types/                    # Global TypeScript types/interfaces
│   └── bookTypes.ts          # Book-related interfaces
├── App.tsx                   # Root app component
├── main.tsx                  # Application entry point
└── index.css                 # Tailwind base styles
