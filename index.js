// require statements
const inquirer = require("inquirer");
const database = require("./database");
const art = require('ascii-art')

// employeeTracker: main menu; allows user to navigate between app's features
const employeeTracker = () => {
    inquirer
        .prompt([
            {
                type: "list",
                message: "Employee Tracker",
                name: "startMenu",
                // startMenu choices include: add, view, update, delete, exit options
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

// start: displays ascii-art then goes into employeeTracker's main menu
const start = () => {
    // asciiart shown as EMPLOYEE TRACKER Dr. Doom text
    art.font("Employee Tracker\n", 'doom', (err, render) => {
        console.log(err || render)
    });
    inquirer
        .prompt(
            { type: 'confirm', message: 'Enter Employee Tracker?', name: 'Enter' },
        )
        .then((data) => {
            if (data === "true") {
                employeeTracker()
            } else console.log("Press CTRL + C to exit app")
            return
        })
}

// calls start to start app on node index.js terminal command
start()