-- drops if it already exists --
DROP DATABASE IF EXISTS employeeTracker_db;
-- create database --
CREATE DATABASE employeeTracker_db;

-- use employeeTracker_db for the following statements --
USE employeeTracker_db;

-- department table --
CREATE TABLE department(
  -- "id" automatically increments its default value w/new rows created --
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

-- role table --
CREATE TABLE role(
  -- "id" automatically increments its default value w/new rows created -- 
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAL(10,2),
  department_id INT,
  -- fk for dept id -- 
  FOREIGN KEY (department_id)
    REFERENCES department(id)
  -- will delete dept for cascading tables that ref'n dept id & no action on update --
  ON
    DELETE CASCADE
  ON
    UPDATE NO ACTION 
);

-- employee table --
CREATE TABLE employee(
  -- "id" automatically increments its default value w/new rows created -- 
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  -- fk for role id -- 
  FOREIGN KEY (role_id)
    REFERENCES role(id)
  -- will delete dept for cascading tables that ref'n dept id & no update action
  ON 
    DELETE CASCADE
  ON 
    UPDATE NO ACTION,
  -- fk for manager id -- 
  manager_id INT,
  FOREIGN KEY (manager_id)
    REFERENCES employee(id)
  -- will delete dept for cascading tables that ref'n dept id & no update action
  ON  
    DELETE CASCADE
  ON
    UPDATE NO ACTION 
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
    ('Galen', 'Rupp', 4, 1),
    ('JRR', 'Tolkien', 5, NULL),
    ('Samara', 'Weaving', 6, 2),
    ('Andy', 'Murray', 7, NULL),
    ('Craig', 'Ferguson', 8, 2);