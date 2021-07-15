const mysql = require("mysql")
const inquirer = require("inquirer");
const { config } = require("../assets/cred.js")

const connection = mysql.createConnection(config);

// code goes here

connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
    pickChoice();
  });