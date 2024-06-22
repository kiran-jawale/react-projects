Task Management Dashboard
A feature-rich task management application built with React, Redux, and Tailwind CSS, featuring user authentication, task creation, and task management functionalities.

Features:
User Authentication
Register, Login, and Password Recovery functionalities
Task Management
Add, Edit, Delete, and Toggle the status of tasks

State Management:
Managed using Redux with persistent state stored in localStorage

Responsive UI:
Styled with Tailwind CSS for a modern and responsive user interface

Technologies Used:
Frontend: React
State Management: Redux & Redux Toolkit
Styling: Tailwind CSS
Build Tool: Vite

Getting Started
Prerequisites
Node.js (v14 or higher)
npm
Vite

Installation
Clone the repository: git clone https://github.com/your-username/task-management-dashboard.git
Install dependencies: npm install
Start the development server with vite : npm run dev

Key Components
Dashboard.jsx: Main dashboard component handling the layout and conditional rendering based on user authentication status
Login.jsx: Login form component
Register.jsx: Registration form component
PasswordRecovery.jsx: Password recovery form component
TaskManager.jsx: Component to handle task creation and display a list of tasks
TaskItem.jsx: Individual task item component with edit and delete functionalities
Sidebar.jsx: Sidebar component for the dashboard
Redux Slice
userSlice.js: Contains state management logic for user authentication, registration, and task management

Styling:
Tailwind CSS is used for styling. The classes are applied directly in the component JSX.

Future Enhancements:
Improve UI/UX: Add more visual enhancements and animations
Advanced Task Management: Add features like task categories, due date notifications, and task sorting
User Profiles: Allow users to update their profiles
Backend Integration: Integrate with a backend server for persistent data storage and retrieval

Contributing:
Contributions are welcome! Please fork the repository and create a pull request with your changes.

License:
This project is licensed under the MIT License.
