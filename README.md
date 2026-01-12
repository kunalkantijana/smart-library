Project Overview

The Smart Library Borrowing System is a full-stack web application that allows students to view available books, borrow one book at a time, calculate borrowing cost, return books, and maintain borrowing history.
The system uses Node.js, Express, MongoDB, and a simple HTML/CSS/JavaScript frontend.

Frontend
--------------------

HTML
CSS
JavaScript

Backend
--------------
Node.js
Express.js
Database
--------------------
MongoDB (Mongoose)
Authentication
JWT (JSON Web Token)
Password hashing using bcryptjs

Project Structure
----------------------------
smart-library/
│
├── backend/
│   ├── server.js
│   ├── config/db.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Book.js
│   │   └── Borrow.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── books.js
│   │   └── borrow.js
│
├── frontend/
│   ├── index.html
│   ├── signup.html
│   ├── dashboard.html
│   ├── books.html
│   ├── history.html
│   └── style.css

Application Workflow (How Project Works)
---------------------------------------------------------
User signs up and logs in
JWT token is generated for authentication
User views list of available books
User can borrow only one book at a time
System calculates:
Total cost = pricePerDay × numberOfDays
User can return the book
Overdue charge is added (mock calculation)
Borrow record is moved to history
All data is stored in MongoDB

Features Implemented
----------------------------------------
User authentication (Signup / Login)
Password hashing
JWT-based authentication
Book listing (predefined & stored in DB)
Borrow validation (one active borrow only)
Cost calculation
Return book functionality
Borrow history
MongoDB data persistence
