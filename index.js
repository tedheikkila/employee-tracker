// require in inquirere and database functions
const inquirer = require("inquirer");
const database = require("./database")

// employeetracker is the main menu; initiated by npm start
const employeeTracker = () => {
   // add node package logo here later (asciiart-logo NPM PACKAGE) to be EMPLOYEE TRACKER
    inquirer 
        .prompt([
            {
                type: "list",
                message: "Entering Employee Tracker",
                name: "startMenu",
                // MVP choices (add more later if time)
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
        ]).then(function(res) {
            switch (res.startMenu) {
                case "Add department":
                    database.addDept(function() {
                        employeeTracker();
                    }); break
                case "Add role":
                    database.addRole(function() {
                        employeeTracker();
                    }); break
                case "Add employee":
                    database.addEmployee(function() {
                        employeeTracker();
                    }); break
                case "View departments":
                    database.viewDepartments(function() {
                        employeeTracker();
                    }); break
                case "View roles":
                    database.viewRoles(function() {
                        employeeTracker();
                    }); break
                case "View employees":
                    database.viewEmployees(function() {
                        employeeTracker();
                    }); break
                case "Update employee role":
                    database.updateEmployeeRole(function() {
                        employeeTracker();
                    }); break
                case "Exit":
                    console.log("Exiting employee tracker");
                        return 
            }
        })
}

// calls employeeTracker to start on npm start
employeeTracker()