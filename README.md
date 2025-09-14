# 📝 ReactTodo

A modern **Task Management (Todo) App** built with **React, Redux Toolkit, and React Router**.  
It supports full **CRUD operations**, task filtering (by status and priority), and a beautiful responsive UI.

---

## 🚀 Features

- ➕ Add new tasks with:
  - Title
  - Due date
  - Priority (High, Medium, Low)
- ✏️ Edit tasks (update text, due date, priority)
- ✅ Mark tasks as complete/incomplete
- ❌ Delete tasks
- 🔍 Filter tasks by:
  - Status: **All / Active / Completed**
  - Priority: **All / High / Medium / Low**
- 📊 Task counter (Pending vs Completed)
- 🌐 Multi-page navigation (`Home`, `Todos`, `About`, `Contact`)
- 🎨 Modern UI with gradients, hover effects, and animations

---

## 📂 Project Structure

src
├── app/
│ └── store.js
├── components/
│ ├── Navbar.js
│ ├── TodoForm.js
│ ├── TodoItem.js
│ └── TodoList.js
├── features/
│ └── todos/
│ └── todosSlice.js
├── pages/
│ ├── AboutPage.js
│ ├── ContactPage.js
│ ├── TodoPage.js
│ └── WelcomePage.js
├── App.css
├── App.js
└── index.js


---

## 🛠️ Tech Stack

- **React 18**
- **Redux Toolkit**
- **React Router DOM v6**
- **React Icons**
- **CSS3** (custom gradients, animations, responsive design)

---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/react-todo.git
   cd react-todo


Install dependencies

npm install


Start the development server

npm start


Open the app in your browser 👉 http://localhost:3000

📸 Screenshots

(Replace with your own screenshots later)

Welcome Page – Intro with "Get Started" button.

Todo Page – Task list with filters, counters, and CRUD actions.

About & Contact Pages – Static info pages.

📚 Learning Objectives

This project demonstrates:

State management with Redux Toolkit slices

Component-driven architecture in React

Routing with React Router DOM

CRUD operations in a frontend app

Styling with CSS gradients, transitions, and animations


