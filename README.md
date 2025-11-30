Employee Attendance System (Local Setup Guide)

A simple Employee Attendance Management System built using:

React (Frontend)

Node.js + Express (Backend)

PostgreSQL (Database)

Sequelize ORM

This guide explains how to run the project locally on your system.

🏗 Project Structure
employee-attendance-system/
│
├── backend/      # Node.js + Express API
└── frontend/     # React UI

⚙️ Requirements

Before running, install:

Node.js (v16 or later)

PostgreSQL (v13+)

npm (comes with Node.js)

🛠️ STEP 1 — Clone Repository
git clone https://github.com/vinaykumar1757/employee-attendance-system.git
cd employee-attendance-system

🗄️ STEP 2 — Setup PostgreSQL (Local)

Open PostgreSQL terminal:

psql -U postgres


Create database:

CREATE DATABASE attendance;

🖥️ STEP 3 — Backend Setup

Open terminal:

cd backend
npm install


Create .env file inside backend/:

DATABASE_URL=postgres://postgres:<YOUR_PASSWORD>@localhost:5433/attendance
JWT_SECRET=supersecret


⚠️ Replace <YOUR_PASSWORD> with your PostgreSQL password.

Run backend:

npm run dev


Backend will start at:

http://localhost:5000

💻 STEP 4 — Frontend Setup

Open a new terminal:

cd frontend
npm install


Create .env file inside frontend/:

REACT_APP_API_URL=http://localhost:5000


Run frontend:

npm start


Frontend will start at:

http://localhost:3000

🎯 Features
Employee

Login / Register

Check-In

Check-Out

View Attendance History

Manager

View Team Attendance

View Employee Information

🧪 API Endpoints

Auth

POST /api/auth/register

POST /api/auth/login

Attendance

POST /api/attendance/checkin

POST /api/attendance/checkout

GET /api/attendance/my-history

GET /api/attendance/all (Manager only)

📦 Tech Used

React

Material UI

Zustand (state management)

Axios

Node.js

Express

JWT

PostgreSQL

Sequelize ORM

✔ How to Use

Start backend → http://localhost:5000

Start frontend → http://localhost:3000

Register a new user

Login

Use the employee or manager dashboard

📌 Notes

Make sure PostgreSQL is running before starting backend

Change DB password in .env if required

attendance database will auto-generate tables on backend start

🎉 You're Ready to Run the App Locally!
