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
  // console.log(`connected as id ${connection.threadId}`);
});

// viewDept: views all depts 
viewDept = (finishViewDept) => {
  console.log("Viewing all departments\n")
  connection.query("SELECT * FROM department", function (err, res) {
    if (err) {
      console.log(err)
    } else {
      console.table(res)
    }
    finishViewDept(err, res)
  })
}

// viewRoles: views all roles
viewRoles = (finishViewRoles) => {
  console.log("Viewing all roles\n")
  connection.query("SELECT * FROM role", function (err, res) {
    if (err) {
      console.log(err)
    } else {
      console.table(res)
    }
    finishViewRoles(err, res)
  })
}

// viewEmployees: views all employees w/their relevant info (joins all employee data to dept and role tables (double join))
viewEmployees = (finishViewEmployees) => {
  console.log("Viewing all employees\n")
  connection.query(`SELECT * FROM employee 
                    JOIN
                    role ON employee.role_id = role.id
                    JOIN
                    department ON role.department_id = department.id
                    `,
    function (err, res) {
      if (err) {
        console.log(err)
      } else {
        console.table(res)
      }
      finishViewEmployees(err, res)
    })
};

// addDept: creates a dept and shows updated dept table
addDept = (finishAddDept) => {
  console.log("Adding new department...\n")
  inquirer.prompt([
    {
      type: "input",
      message: "Enter new department name:",
      name: "newDepartment"
    }
  ]).then(function (res) {
    connection.query("INSERT INTO department SET ?",
      // inserts user's res into department's name column
      {
        name: res.newDepartment
      },
      function () {
        console.log(`Deparment ${res.newDepartment} was created\n`)
        viewDept(finishAddDept)
      }
    )
  })
};

// addRole: creates a role and shows updated role table
addRole = (finishAddRole) => {
  console.log("Adding new role...")
  inquirer.prompt([
    {
      type: "input",
      message: "Enter in new role's title:",
      name: "newRole"
    },
    {
      type: "input",
      message: "Enter in their salary:",
      name: "newSalary"
    },
    {
      type: "number",
      message: "Enter in their department ID:",
      name: "deptID"
    },
  ]).then(function (res) {
    // inserts user's res into role's columns (title, sal, deptID)
    connection.query("INSERT INTO role SET ?",
      {
        title: res.newRole,
        salary: res.newSalary,
        department_id: res.deptID
      },
      function () {
        console.log(`Role ${res.newRole} was created\n`)
        viewRoles(finishAddRole)
      }
    )
  })
};

// addEmployee: creates an employee and shows updated employee table
addEmployee = (finishAddEmployee) => {
  console.log("Adding new employee...\n")
  inquirer.prompt([
    {
      type: "input",
      message: "Enter in new employee's first name:",
      name: "firstName"
    },
    {
      type: "input",
      message: "Enter in their last name:",
      name: "lastName"
    },
    {
      type: "number",
      message: "Enter in their role ID #:",
      name: "roleID"
    },
    {
      type: "number",
      message: "If manager leave blank and hit Enter. If not a manager, enter in their manager's employee ID #:",
      name: "managerID"
    },
  ]).then(function (res) {
    // inserts user's res into employee's columns (firstname, lastname, roleID, managerID (if applicable))
    connection.query("INSERT INTO employee SET ?",
      {
        first_name: res.firstName,
        last_name: res.lastName,
        role_id: res.roleID,
        manager_id: res.managerID
      },
      function () {
        console.log(`${res.firstName} ${res.lastName} was added\n`)
        viewEmployees(finishAddEmployee)
      }
    )
  })
};

// updateEmployeeRole: updates employee's role and shows updated employee table
function updateEmployeeRole(finishUpdateEmployee) {
  console.log("Updating employee's role...\n")
  connection.query("SELECT * FROM employee", function (err, res) {
    console.table(res)
    inquirer.prompt(
      [
        {
          type: "number",
          message: "Input ID for employee you're updating:",
          name: "oldEmployeeID"
        },
        {
          type: "number",
          message: "Enter in employee's new role ID #:",
          name: "newEmployeeID"
        }
      ]
    ).then((res) => {
      // takes in their current ID and resets their role id to new role
      connection.query("UPDATE employee SET ? WHERE ?",
        [
          { role_id: res.newEmployeeID },
          { id: res.oldEmployeeID }
        ], function (err, res) {
          console.log(err)
          viewEmployees(finishUpdateEmployee)
        });
    })
  })
}

// updateEmployeeManager: updates employee's manager and shows updated employee table
function updateEmployeeManager(finishUpdateEmployeeManager) {
  console.log("Updating employee's manager...\n")
  connection.query("SELECT * FROM employee", function (err, res) {
    console.table(res)
    inquirer.prompt(
      [
        {
          type: "number",
          message: "Input ID for employee you're updating:",
          name: "oldEmployeeID"
        },
        {
          type: "number",
          message: "Enter in employee's new manager ID #:",
          name: "newManagerID"
        }
      ]
    ).then((res) => {
      // takes in their current ID and resets their role id to new role
      connection.query("UPDATE employee SET ? WHERE ?",
        [
          { manager_id: res.newManagerID },
          { id: res.oldEmployeeID }
        ], function (err, res) {
          console.log(err)
          viewEmployees(finishUpdateEmployeeManager)
        });
    })
  })
};

// deleteDept: deletes a dept and shows updated dept table
deleteDept = (finishDeleteDept) => {
  console.log("Deleting a department...\n");
  connection.query("SELECT * FROM department", function (err, res) {
    console.table(res)
    inquirer.prompt([
      {
        type: "number",
        message: "Enter in department ID #:",
        name: "deleteDepartment"
      }
    ]).then(function (res) {
      var deletedDept = Number(res.deleteDepartment)
      connection.query("DELETE FROM department WHERE ?", { id: deletedDept }, function (err, res) {
          console.log(`Deparment ${deletedDept} was deleted\n`)
          viewDept(finishDeleteDept)
      })
    })
  })
};

// exit: ends connection for employeeTracker
endEmployeeTracker = () => {
  connection.end();
}

// export functions back to index.js 
module.exports = {
  "addDept": addDept,
  "viewDept": viewDept,
  "addRole": addRole,
  "viewRoles": viewRoles,
  "addEmployee": addEmployee,
  "viewEmployees": viewEmployees,
  "updateEmployeeRole": updateEmployeeRole,
  "updateEmployeeManager": updateEmployeeManager,
  "deleteDept": deleteDept,
  "endEmployeeTracker": endEmployeeTracker,

}