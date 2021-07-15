const mysql = require("mysql")
const inquirer = require("inquirer");
const { config } = require("../assets/cred.js");
const cTable = require('console.table');


const connection = mysql.createConnection(config);

// code goes here

// SELECT STATEMENT USING mysql package, placeholders, and objects
connection.query(
  'SELECT * FROM <tablename> WHERE ?',
  {
    // key/value pairs for each column querying against
    // column_name: value
    id: 1
  },
  (err) => {
    if (err) throw err;
    // whatever happens if everything goes well
  }
);
// INSERT STATEMENT USING mysql package, placeholders, and objects
connection.query(
  'INSERT INTO <tablename> SET ?',
  {
    // key/value pairs for each column we are inserting for
    // column_name: value
  },
  (err) => {
    if (err) throw err;
    // whatever happens if everything goes well
  }
);
// UPDATE STATEMENT USING mysql package, placeholders, and objects
connection.query(
  'UPDATE <tablename> SET ? WHERE ?',
  [
    { column_name: dataToUpdate },   // what are we updating; multiple keys/values are fine
    { id: idValueToChange }          // which record/row are we updating
  ],
  (error) => {
    if (error) throw err;
    console.log('Bid placed successfully!');
    start();
  }
);
// DELETE STATEMENT USING mysql package, placeholders, and objects
connection.query(
  'DELETE FROM <tablename> WHERE ?',
  { id: idValueToChange },                  // which record/row are we deleting
  (error) => {
    if (error) throw err;
    console.log('Bid placed successfully!');
    start();
  }
);

connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
    pickChoice();
  });