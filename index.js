// require statements
const inquirer = require("inquirer");
const database = require("./database");
const art = require('ascii-art')

// employeeTracker is main menu; initiated by node index.js
const employeeTracker = () => {
    inquirer
        .prompt([
            {
                type: "list",
                message: "Employee Tracker",
                name: "startMenu",
                // startMenu choices (add, view, update, delete, exit)
                choices: [
                    "Add department",
                    "Add role",
                    "Add employee",
                    "View departments",
                    "View roles",
                    "View employees",
                    "Update employee role",
                    "Update employee manager",
                    "Delete department",
                    "Delete role",
                    "Delete employee",
                    "Exit"
                ]
            },
        ]).then(function (res) {
            switch (res.startMenu) {
                case "Add department":
                    database.addDept(function () {
                        employeeTracker();
                    }); break
                case "Add role":
                    database.addRole(function () {
                        employeeTracker();
                    }); break
                case "Add employee":
                    database.addEmployee(function () {
                        employeeTracker();
                    }); break
                case "View departments":
                    database.viewDept(function () {
                        employeeTracker();
                    }); break
                case "View roles":
                    database.viewRoles(function () {
                        employeeTracker();
                    }); break
                case "View employees":
                    database.viewEmployees(function () {
                        employeeTracker();
                    }); break
                case "Update employee role":
                    database.updateEmployeeRole(function () {
                        employeeTracker();
                    }); break
                case "Update employee manager":
                    database.updateEmployeeManager(function () {
                        employeeTracker();
                    }); break
                case "Delete department":
                    database.deleteDept(function () {
                        employeeTracker();
                    }); break
                case "Delete role":
                    database.deleteRole(function () {
                        employeeTracker();
                    }); break
                case "Delete employee":
                    database.deleteEmployee(function () {
                        employeeTracker();
                    }); break
                case "Exit":
                    console.log("Exiting employee tracker");
                    database.endEmployeeTracker(function () {
                        process.exit()
                    }); break
            }
        })
}

const start = () => {
    // asciiart shown as EMPLOYEE TRACKER doom text
    art.font("Employee Tracker", 'doom', (err, rendered) => {
        console.log(err || rendered)
    });

    employeeTracker()
}

// calls start to display ascii-art then go into employeeTracker to start on node index.js
start()