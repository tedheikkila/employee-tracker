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

// viewDept: views all depts 
viewDept = (finishViewDept) => {
  console.log("Viewing all departments")
  connection.query("SELECT * FROM department", function (err, res) {
    if (err) {console.log(err)
    } else {
      console.table(res)
    }
    finishViewDept(err, res)
  })
}

// addDept: creates a department and shows updated dept table
addDept = (finishAddDept) => {
  console.log("Adding new department...")
  inquirer.prompt([
    {
      type:"input",
      message: "Enter new department name:",
      name: "newDepartment"
    }
  ]).then(function(response) {
    connection.query("INSERT INTO department SET ?", 
    {
      name: response.newDepartment
    },
    function() {
      console.log(`Deparment ${response.newDepartment} was created`)
      viewDept(finishAddDept)
    }
    )
  }) 
};



// exit: ends connection for employeeTracker
endEmployeeTracker = () => {
  connection.end();
}


// export functions back to index.js 
module.exports = {
  "endEmployeeTracker": endEmployeeTracker,
  "addDept": addDept,
  "viewDept": viewDept,
}

