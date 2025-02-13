CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role ENUM('student', 'director', 'admin') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE institutions (
    institution_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL UNIQUE,
    location VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE programs (
    program_id INT PRIMARY KEY AUTO_INCREMENT,
    institution_id INT NOT NULL,
    program_name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (institution_id) REFERENCES institutions(institution_id) ON DELETE CASCADE
);

CREATE TABLE courses (
    course_id INT PRIMARY KEY AUTO_INCREMENT,
    institution_id INT NOT NULL,
    program_id INT NOT NULL,
    course_name VARCHAR(255) NOT NULL,
    course_code VARCHAR(50) NOT NULL UNIQUE,
    credits INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (institution_id) REFERENCES institutions(institution_id) ON DELETE CASCADE,
    FOREIGN KEY (program_id) REFERENCES programs(program_id) ON DELETE CASCADE
);

CREATE TABLE knowledge_units (
    ku_id INT PRIMARY KEY AUTO_INCREMENT,
    ku_name VARCHAR(255) NOT NULL UNIQUE,
    ku_description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE course_ku (
    course_id INT NOT NULL,
    ku_id INT NOT NULL,
    PRIMARY KEY (course_id, ku_id),
    FOREIGN KEY (course_id) REFERENCES courses(course_id) ON DELETE CASCADE,
    FOREIGN KEY (ku_id) REFERENCES knowledge_units(ku_id) ON DELETE CASCADE
);

CREATE TABLE students (
    student_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    institution_id INT NOT NULL,
    program_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (institution_id) REFERENCES institutions(institution_id) ON DELETE CASCADE,
    FOREIGN KEY (program_id) REFERENCES programs(program_id) ON DELETE CASCADE
);

CREATE TABLE directors (
    director_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    institution_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (institution_id) REFERENCES institutions(institution_id) ON DELETE CASCADE
);

CREATE TABLE admins (
    admin_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE course_match (
    match_id INT PRIMARY KEY AUTO_INCREMENT,
    institution_from INT NOT NULL,
    institution_to INT NOT NULL,
    course_from INT NOT NULL,
    course_to INT NOT NULL,
    match_status ENUM('Pending', 'Approved', 'Rejected') DEFAULT 'Pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (institution_from) REFERENCES institutions(institution_id) ON DELETE CASCADE,
    FOREIGN KEY (institution_to) REFERENCES institutions(institution_id) ON DELETE CASCADE,
    FOREIGN KEY (course_from) REFERENCES courses(course_id) ON DELETE CASCADE,
    FOREIGN KEY (course_to) REFERENCES courses(course_id) ON DELETE CASCADE
);

CREATE TABLE transfer_requests (
    request_id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT NOT NULL,
    course_from INT NOT NULL,
    course_to INT NOT NULL,
    institution_from INT NOT NULL,
    institution_to INT NOT NULL,
    status ENUM('Pending', 'Approved', 'Rejected') DEFAULT 'Pending',
    request_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (student_id) REFERENCES students(student_id) ON DELETE CASCADE,
    FOREIGN KEY (course_from) REFERENCES courses(course_id) ON DELETE CASCADE,
    FOREIGN KEY (course_to) REFERENCES courses(course_id) ON DELETE CASCADE,
    FOREIGN KEY (institution_from) REFERENCES institutions(institution_id) ON DELETE CASCADE,
    FOREIGN KEY (institution_to) REFERENCES institutions(institution_id) ON DELETE CASCADE
);

CREATE TABLE match_history (
    log_id INT PRIMARY KEY AUTO_INCREMENT,
    match_id INT NOT NULL,
    changed_by INT NOT NULL,
    change_type ENUM('Created', 'Updated', 'Deleted') NOT NULL,
    change_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (match_id) REFERENCES course_match(match_id) ON DELETE CASCADE,
    FOREIGN KEY (changed_by) REFERENCES users(user_id) ON DELETE CASCADE
);
