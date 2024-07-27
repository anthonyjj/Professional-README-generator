// TODO: Include packages needed for this application
const inquierer = require('inquirer');
const colors = require('colors');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
const { type } = require('os');
// TODO: Create an array of questions for user input
const questions = [ 
    {
        type: "input",
        name: "title",
        message: "What is your username?",
    },

    {
        type: "input",
        name: "description",
        message: "Please desbcribe the purpose and funcionality of this project",
    },

    {
        type: "input",
        name: "installation",
        message: "Please describe how to install/run this application",
    },

    {
        type: "checkbox",
        name: "license",
        message: "Please select a license applicable to this project",
        choices: ["MIT", "APACHE", "none"],
    },

    {
        type: "input",
        name: 'dependencies',
        message: "List any project dependencies that the project uses",
    },

    {
        type: "input",
        name: "usage",
        message: "state the language or tehnologies used with this project",
    },

    {
        type: "input",
        name: "contributions",
        message: "Please list any contributors. (Use GitHub Usernames)",
        
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating Professional README.md File...");
        writeToFile("./dist/README.md", generateMarkdown({...responses}));
    });
}

// Function call to initialize app
init();
