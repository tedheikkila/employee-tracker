# employee-tracker

 ## Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)
  - [Tests](#tests)
  - [Questions](#questions)
  - [Demo](#demo)
  - [Screenshots](#screenshots)

  ## Description

  What is this app and what does it do:

  This app is designed for a user who wants an employee management system. It's a Node.js app that runs from an integrated terminal CLI. Using this employee tracker app, the user is able to add employees/roles/departments, view employees/roles/departments, update an employee's role, update an employee's manager, and delete an employee/role/department. 

  Technologies used: Javascript, Node.js, npm ascii-art, npm inquirer, mySQL, console.table, and npm mysql.

  * To see the app in action, check out the demo URL in the Demo section below.


  ## Installation

  To install npm dependencies (mysql, inquirer, ascii-art, and console.table), please use this command >> npm install

  ## Usage

  Here's the essentials for what you need to know to use this app: 

  After running npm install and creating a cred.js file for mySQL, this app starts by the user being at the root level of the project and entering in node index.js. The user can then follow the prompts as desired to manipulate departments, roles, and employees as they see fit. The main features the app provides are: adding, viewing, updating, and deleting records. It uses console.table and ascii-art to create a visually appealing CLI. To exit the app, simply select the Exit option in the start menu and the user will be notified with a "Goodbye." All changes made by user will be reflected in their relevant mySQL database. 

  ## Contributing

  To contribute to this app, please follow these instructions: 
  
  Please add descriptive commit messages and comments. Remember to do a npm install for mysql, inquirer, and other relevant packages listed above, then create a .gitignore for the node_module, assets (w/cred.js file), and package-lock.json folder if/when pushing to GitHub.

  ## License
  
  * No applicable license for this app

  ## Tests

  No tests were developed. 
  
  ## Questions

  * If you have any questions/concerns regarding the app, please contact me at GitHub here: https://github.com/tedheikkila

  ## Demo

  * Check out the app's demo tutorial here >> https://drive.google.com/file/d/1QvgWCmkjkXdT6kwIBDIYV9xa-PmxQHhw/view?usp=sharing 

  ## Screenshots

  * cred file setup (best practice please use .env file setup; this app uses gitignore for assets folder, which contains the cred.js file. password field is for your mySQL password)

  ![](./images/hw12-1.png)

   * homepage

  ![](./images/hw12-2.png)

   * start menu

  ![](./images/hw12-3.png)

  * all departments

  ![](./images/hw12-4.png)

   * all roles

  ![](./images/hw12-5.png)

   * all employees

  ![](./images/hw12-6.png)

   * app closes

  ![](./images/hw12-7.png)