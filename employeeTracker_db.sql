-- Drops if it already exists --
DROP DATABASE IF EXISTS employeeTracker_db;
-- Create a database --
CREATE DATABASE employeeTracker_db;

-- Use programming db for the following statements --
USE employeeTracker_db;

CREATE TABLE employees(
  -- Create a numeric column called "id" which will automatically increment its default value as we create new rows --
  id INTEGER(11) AUTO_INCREMENT NOT NULL PRIMARY KEY,

  -- Create a column called name --
--   name VARCHAR(50) NOT NULL,

--   -- Create a column called descr --
--   description VARCHAR(50) NOT NULL,

--   -- Create a column called bid --
--   bid INTEGER(11) NOT NULL DEFAULT 0
);

-- Create new rows
USE greatBay_db;
INSERT INTO employees()
VALUES
-- ("House", "Big House", 10000),
-- ("Car", "Nice Car", 1000),
-- ("Dog", "Cool Dog", 100);