User Management System

Overview

This is a User Management System built with React (Frontend), Spring Boot (Backend), and MySQL (Database). The system allows users to register, log in, log out, manage their profiles, and view other user profiles.

Features

User Registration: Users can sign up with their name, phone number, username, password, email, and job type.

Login & Logout: Secure authentication using Spring Security.

Profile Management: Users can update their profile details.

User Management: Admins can add and manage users.

Database Integration: All user data is stored securely in a MySQL database.

Tech Stack

Frontend: React (with React Router, Axios, Tailwind CSS)

Backend: Spring Boot (Spring Security, Spring Data JPA)

Database: MySQL

Authentication: JWT (JSON Web Tokens)

Installation & Setup

Prerequisites

Node.js (for React frontend)

Java 17+ (for Spring Boot backend)

MySQL (for database storage)

Backend Setup (Spring Boot)

Clone the repository:

Configure database settings in application.properties:

Run the application:

Frontend Setup (React)

Navigate to the frontend folder:

Install dependencies:

Start the React application:

API Endpoints

Authentication

POST /api/auth/register - Register a new user

POST /api/auth/login - Authenticate user and get JWT token

User Management

GET /api/users/{id} - Get user profile

PUT /api/users/{id} - Update user profile

GET /api/users - Get all users (Admin only)

Contributing

Contributions are welcome! Feel free to fork the repository and submit a pull request.

License

This project is licensed under the MIT License.

Author

Developed by Govinda Praajapati and Jil Patel

