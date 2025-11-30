🚀 How to Setup & Run This Project (Locally)

Follow these steps to run the Employee Attendance System on your own computer.

✅ 1. Install Requirements

Make sure you have installed:

Node.js

npm

PostgreSQL

Git

🛠 2. Clone the Repository
git clone https://github.com/vinaykumar1757/employee-attendance-system.git
cd employee-attendance-system

🗄 3. Setup PostgreSQL Database

Open PostgreSQL:

psql -U postgres


Create the database:

CREATE DATABASE attendance;


Exit psql:

\q

⚙️ 4. Setup Backend

Go to the backend folder:

cd backend
npm install


Create .env in backend:

DATABASE_URL=postgres://postgres:<YOUR_PASSWORD>@localhost:5433/attendance
JWT_SECRET=supersecret


(Replace <YOUR_PASSWORD> with your PostgreSQL password)

Start backend:

npm run dev


Backend runs at:

http://localhost:5000

💻 5. Setup Frontend

Open a new terminal:

cd frontend
npm install


Create .env in frontend:

REACT_APP_API_URL=http://localhost:5000


Start frontend:

npm start


Frontend runs at:

http://localhost:3000

🎯 6. Use the Application

Open frontend: http://localhost:3000

Register a new user

Login as Employee or Manager

Use Check-In / Check-Out and Attendance Dashboard

📡 Tech Stack

React

Material UI

Zustand

Node.js + Express

PostgreSQL

Sequelize ORM

JWT Authentication
