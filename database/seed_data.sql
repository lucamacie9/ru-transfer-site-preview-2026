-- Insert institutions
INSERT INTO institutions (name, location) VALUES 
('Roosevelt University', 'Chicago, IL'),
('Harold Washington College', 'Chicago, IL');

-- Insert users (directors, students, admins)
INSERT INTO users (name, email, password_hash, role) VALUES 
('Alice Johnson', 'alice.johnson@roosevelt.edu', 'hashed_password_1', 'director'),
('Bob Smith', 'bob.smith@hwc.edu', 'hashed_password_2', 'director'),
('Charlie Davis', 'charlie.davis@roosevelt.edu', 'hashed_password_3', 'student'),
('Diana Lee', 'diana.lee@hwc.edu', 'hashed_password_4', 'student'),
('Eve Thompson', 'eve.thompson@admin.com', 'hashed_password_5', 'admin');

-- Insert directors
INSERT INTO directors (user_id, institution_id) VALUES 
((SELECT user_id FROM users WHERE email = 'alice.johnson@roosevelt.edu'), (SELECT institution_id FROM institutions WHERE name = 'Roosevelt University')),
((SELECT user_id FROM users WHERE email = 'bob.smith@hwc.edu'), (SELECT institution_id FROM institutions WHERE name = 'Harold Washington College'));

-- Insert programs
INSERT INTO programs (institution_id, program_name) VALUES 
((SELECT institution_id FROM institutions WHERE name = 'Roosevelt University'), 'Computer Science'),
((SELECT institution_id FROM institutions WHERE name = 'Roosevelt University'), 'Cybersecurity'),
((SELECT institution_id FROM institutions WHERE name = 'Harold Washington College'), 'Information Technology'),
((SELECT institution_id FROM institutions WHERE name = 'Harold Washington College'), 'Software Development');

-- Insert courses
INSERT INTO courses (institution_id, program_id, course_name, course_code, credits) VALUES 
((SELECT institution_id FROM institutions WHERE name = 'Roosevelt University'), 
 (SELECT program_id FROM programs WHERE program_name = 'Computer Science' AND institution_id = (SELECT institution_id FROM institutions WHERE name = 'Roosevelt University')), 
 'Data Structures and Algorithms', 'CS101', 4),

((SELECT institution_id FROM institutions WHERE name = 'Roosevelt University'), 
 (SELECT program_id FROM programs WHERE program_name = 'Cybersecurity' AND institution_id = (SELECT institution_id FROM institutions WHERE name = 'Roosevelt University')), 
 'Network Security', 'CYB201', 3),

((SELECT institution_id FROM institutions WHERE name = 'Harold Washington College'), 
 (SELECT program_id FROM programs WHERE program_name = 'Information Technology' AND institution_id = (SELECT institution_id FROM institutions WHERE name = 'Harold Washington College')), 
 'IT Fundamentals', 'IT101', 3),

((SELECT institution_id FROM institutions WHERE name = 'Harold Washington College'), 
 (SELECT program_id FROM programs WHERE program_name = 'Software Development' AND institution_id = (SELECT institution_id FROM institutions WHERE name = 'Harold Washington College')), 
 'Web Development', 'SD102', 3);

-- Insert knowledge units
INSERT INTO knowledge_units (ku_name, ku_description) VALUES 
('Programming Concepts', 'Covers fundamental programming logic and syntax'),
('Cybersecurity Basics', 'Introduction to security concepts and best practices'),
('Networking Fundamentals', 'Covers basic networking principles and protocols'),
('Database Management', 'Covers SQL and NoSQL database principles');

-- Associate courses with knowledge units
INSERT INTO course_ku (course_id, ku_id) VALUES 
((SELECT course_id FROM courses WHERE course_code = 'CS101'), (SELECT ku_id FROM knowledge_units WHERE ku_name = 'Programming Concepts')),
((SELECT course_id FROM courses WHERE course_code = 'CYB201'), (SELECT ku_id FROM knowledge_units WHERE ku_name = 'Cybersecurity Basics')),
((SELECT course_id FROM courses WHERE course_code = 'IT101'), (SELECT ku_id FROM knowledge_units WHERE ku_name = 'Networking Fundamentals')),
((SELECT course_id FROM courses WHERE course_code = 'SD102'), (SELECT ku_id FROM knowledge_units WHERE ku_name = 'Database Management'));

-- Insert students
INSERT INTO students (user_id, institution_id, program_id) VALUES 
((SELECT user_id FROM users WHERE email = 'charlie.davis@roosevelt.edu'), 
 (SELECT institution_id FROM institutions WHERE name = 'Roosevelt University'), 
 (SELECT program_id FROM programs WHERE program_name = 'Computer Science' AND institution_id = (SELECT institution_id FROM institutions WHERE name = 'Roosevelt University'))),

((SELECT user_id FROM users WHERE email = 'diana.lee@hwc.edu'), 
 (SELECT institution_id FROM institutions WHERE name = 'Harold Washington College'), 
 (SELECT program_id FROM programs WHERE program_name = 'Software Development' AND institution_id = (SELECT institution_id FROM institutions WHERE name = 'Harold Washington College')));

-- Insert admin
INSERT INTO admins (user_id) VALUES 
((SELECT user_id FROM users WHERE email = 'eve.thompson@admin.com'));

-- Insert course matches (example)
INSERT INTO course_match (institution_from, institution_to, course_from, course_to, match_status) VALUES 
((SELECT institution_id FROM institutions WHERE name = 'Roosevelt University'), 
 (SELECT institution_id FROM institutions WHERE name = 'Harold Washington College'), 
 (SELECT course_id FROM courses WHERE course_code = 'CS101'), 
 (SELECT course_id FROM courses WHERE course_code = 'SD102'), 
 'Pending');

-- Insert transfer requests (example)
INSERT INTO transfer_requests (student_id, course_from, course_to, institution_from, institution_to, status) VALUES 
((SELECT student_id FROM students WHERE user_id = (SELECT user_id FROM users WHERE email = 'charlie.davis@roosevelt.edu')), 
 (SELECT course_id FROM courses WHERE course_code = 'CS101'), 
 (SELECT course_id FROM courses WHERE course_code = 'SD102'), 
 (SELECT institution_id FROM institutions WHERE name = 'Roosevelt University'), 
 (SELECT institution_id FROM institutions WHERE name = 'Harold Washington College'), 
 'Pending');
