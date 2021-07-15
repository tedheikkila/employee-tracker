-- Drops if it already exists --
DROP DATABASE IF EXISTS employeeTracker_db;
-- Create a database --
CREATE DATABASE employeeTracker_db;

-- Use programming db for the following statements --
USE employeeTracker_db;

-- department table --
CREATE TABLE department(
  -- Create a numeric column called "id" which will automatically increment its default value as we create new rows --
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

-- role table --
CREATE TABLE role(
  -- Create a numeric column called "id" which will automatically increment its default value as we create new rows --
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10,4) NOT NULL,
  department_id INT NOT NULL FOREIGN KEY
);

-- employee table --
CREATE TABLE employee(
  -- Create a numeric column called "id" which will automatically increment its default value as we create new rows --
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL FOREIGN KEY,
  manager_id INT FOREIGN KEY
);

-- Create new rows
USE employeeTracker_db;
INSERT INTO department
    (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');
INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Sales Lead', 200000, 1),
    ('Salesperson', 70000, 1),
    ('Lead Engineer', 150000, 2),
    ('Software Engineer', 110000, 2),
    ('Account Manager', 150000, 3),
    ('Accountant', 135000, 3),
    ('Legal Team Lead', 260000, 4),
    ('Lawyer', 185000, 4);
INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Nate', 'Hill', 1, NULL),
    ('Shalane', 'Flanagan', 2, 1),
    ('Timothee', 'Chalamet', 3, NULL),
    ('Galen', 'Rupp', 4, 3),
    ('JRR', 'Tolkien', 5, NULL),
    ('Samara', 'Weaving', 6, 5),
    ('Andy', 'Murray', 7, NULL),
    ('Craig', 'Ferguson', 8, 7);