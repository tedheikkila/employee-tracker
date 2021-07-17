// require statements
const inquirer = require("inquirer");
const database = require("./database")

// employeeTracker is main menu; initiated by node index.js
const employeeTracker = () => {
    // add node package logo here (asciiart-logo NPM PACKAGE) to be shown as EMPLOYEE TRACKER
    inquirer
        .prompt([
            {
                type: "list",
                message: "Employee Tracker",
                name: "startMenu",
                // MVP done; add delete dept, role, employees
                choices: [
                    "Add department",
                    "Add role",
                    "Add employee",
                    "View departments",
                    "View roles",
                    "View employees",
                    "Update employee role",
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
                case "Exit":
                    console.log("Exiting employee tracker");
                    database.endEmployeeTracker(function(){
                        process.exit()
                    }); break     
            }
        })
}

// calls employeeTracker to start on node index.js
employeeTracker()