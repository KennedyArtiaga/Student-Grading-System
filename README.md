# Student Grade System (SGS)

A comprehensive web-based application for managing student grades and academic records. Built with React.js, Node.js, and MySQL.

## Features

- **Student Management**
  - Unique student ID generation (YYCOURSE-XXXX format)
  - Student profile management
  - Course and section tracking

- **Grade Management**
  - Subject-wise grade entry
  - Automatic grade calculation
  - Grade history tracking
  - PDF report generation

- **User Authentication**
  - Secure login system
  - Role-based access control
  - JWT token authentication

- **Dashboard**
  - Student performance analytics
  - Grade distribution visualization
  - Quick access to key functions

## Tech Stack

- **Frontend**
  - React.js
  - Material-UI
  - Axios
  - React Router
  - JSPDF (for PDF generation)

- **Backend**
  - Node.js
  - Express.js
  - MySQL
  - JWT Authentication

## Prerequisites

- Node.js (v14 or higher)
- MySQL (v8.0 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository
```bash
git clone https://github.com/KennedyArtiaga/Student-Grading-System.git
cd Student-Grading-System
```

2. Install frontend dependencies
```bash
cd frontend
npm install
```

3. Install backend dependencies
```bash
cd ../backend
node server.js
```

4. Set up environment variables
   - Create `.env` file in the backend directory
   - Add the following variables:
   ```
   DB_HOST=localhost
   DB_USER=your_mysql_username
   DB_PASSWORD=your_mysql_password
   DB_NAME=student_grading_system
   JWT_SECRET=your_jwt_secret
   ```

5. Set up the database
   - Create a MySQL database named `student grading system`
   - Import the schema from `database/schema.sql`

## Running the Application

1. Start the backend server
```bash
cd backend
node server.js
```

2. Start the frontend development server
```bash
cd frontend
npm start
```

3. Access the application at `http://localhost:3000`

## Project Structure

```
student grading system/
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── App.js
│       └── index.js
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
└── database/
    └── schema.sql
```

## Database Structure

### Database Name
The database should be named `student_grading_system` (Student Grading System Database)

### Tables Structure

1. **users**
   - `id` (INT, Primary Key)
   - `username` (VARCHAR)
   - `password` (VARCHAR, hashed)
   - `role` (ENUM: 'admin', 'teacher', 'student')
   - `created_at` (TIMESTAMP)
   - `updated_at` (TIMESTAMP)

2. **students**
   - `id` (INT, Primary Key)
   - `student_id` (VARCHAR, Unique, Format: YYCOURSE-XXXX)
   - `first_name` (VARCHAR)
   - `last_name` (VARCHAR)
   - `email` (VARCHAR)
   - `course` (VARCHAR)
   - `section` (VARCHAR)
   - `created_at` (TIMESTAMP)
   - `updated_at` (TIMESTAMP)

3. **subjects**
   - `id` (INT, Primary Key)
   - `subject_code` (VARCHAR)
   - `subject_name` (VARCHAR)
   - `units` (INT)
   - `created_at` (TIMESTAMP)
   - `updated_at` (TIMESTAMP)

4. **grades**
   - `id` (INT, Primary Key)
   - `student_id` (INT, Foreign Key)
   - `subject_id` (INT, Foreign Key)
   - `midterm_grade` (DECIMAL)
   - `final_grade` (DECIMAL)
   - `semester` (VARCHAR)
   - `school_year` (VARCHAR)
   - `created_at` (TIMESTAMP)
   - `updated_at` (TIMESTAMP)

### Naming Conventions
- All table names are in lowercase and plural form
- Primary keys are named `id`
- Foreign keys are named `table_name_id`
- Timestamps are named `created_at` and `updated_at`
- All column names are in snake_case

## Current Implementation Status

### Backend Implementation
- Basic server setup with Express.js
- Directory structure established:
  - `config/` - Configuration files
  - `controllers/` - Route controllers
  - `models/` - Database models
  - `routes/` - API routes
  - `middleware/` - Custom middleware
- Server.js configured with basic Express setup

### Frontend Implementation
- React application initialized
- Basic project structure:
  - `public/` - Static assets
  - `src/` - Source code
- Package dependencies installed:
  - React
  - Material-UI
  - Axios
  - React Router
  - JSPDF

### Next Steps
- Database schema implementation
- Authentication system setup
- API endpoint implementation
- Frontend component development
- Grade calculation logic
- PDF report generation

## API Endpoints

### Authentication
- POST `/api/auth/login` - User login
- POST `/api/auth/register` - User registration

### Students
- GET `/api/students` - Get all students
- POST `/api/students` - Create new student
- GET `/api/students/:id` - Get student by ID
- PUT `/api/students/:id` - Update student
- DELETE `/api/students/:id` - Delete student

### Grades
- GET `/api/grades` - Get all grades
- POST `/api/grades` - Create new grade
- GET `/api/grades/:id` - Get grade by ID
- PUT `/api/grades/:id` - Update grade
- DELETE `/api/grades/:id` - Delete grade

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## References

### Lab Manual References
1. **Web Development Laboratory Manual**
   - Topics Covered:
     - React.js Fundamentals
     - Node.js Backend Development
     - MySQL Database Management
     - RESTful API Design
     - Authentication & Authorization

2. **Database Management Systems Laboratory Manual**
   - Topics Covered:
     - Database Design
     - SQL Queries
     - Data Normalization
     - Database Security

Note: This project was developed as part of the Application Development Laboratory course, following the guidelines and requirements specified in the course manual. All implementations adhere to the academic standards and best practices outlined in the referenced materials.

