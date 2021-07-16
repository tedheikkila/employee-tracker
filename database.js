// require statements
let mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require('console.table');
const { config } = require("./assets/cred.js");

// set up connection w/mysql using creds from config
const connection = mysql.createConnection(config);

// connect and check connection
connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
});



// code for adding, viewing, etc goes here



// ends connection for employeeTracker
endEmployeeTracker = () => {
  connection.end();
}


// export functions back to index.js 
module.exports = {
  "endEmployeeTracker": endEmployeeTracker,
}

