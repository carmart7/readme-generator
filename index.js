// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of question OBJECTS for user input
const questions = [
    {message: 'Enter project title!', name: 'title'}, // # Title
    {message: 'Enter project description!', name: 'description'}, // # Description
    {message: 'Enter project installation instructions!', name: 'installation'}, // # Installation
    {message: 'Enter project usage information!', name: 'usage'}, // # Usage
    {message: 'Enter project contribution guidelines!', name: 'contributing'}, // # Contributing
    {message: 'Enter project test intructions!', name: 'tests'}, // # Tests
    {message: 'Choose a license!', name: 'license', type: 'list', choices: [
        {name: 'Apache 2.0 License', value: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'},
        {name: 'BSD 3-Clause License', value: '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'},
        {name: 'GNU GPL v3', value: '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'},
        {name: 'The MIT License', value: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'}
    ]}, // badge for license at top of readme and a section called License to explain which license the application uses
    {message: 'Enter github username', name: 'github'}, // Added to #Questions with a link to github profile
    {message: 'Enter email address', name: 'email'} // Added to #Questions with insutrctions on how to reach me with additional questions
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let fileText = `## ${data.title}\n`
                    + `# Table of Contents\n` 
                    + `1. [Description](#description)\n` 
                    + `2. [Installation](#installation)\n` 
                    + `3. [Usage](#usage)\n` 
                    + `4. [Contributing](#contributing)\n` 
                    + `5. [Tests](#tests)\n` 
                    + `6. [Questions](#questions)\n` 
                    + `# Description\n${data.description}\n`
                    + `# Installation\n${data.installation}\n`
                    + `# Usage\n${data.usage}\n`
                    + `# Contributing\n${data.contributing}\n`
                    + `# Tests\n${data.tests}\n`
                    + `# Questions\n`
                    + `Send questions to my [github](https://github.com/${data.github}) or send an email at ${data.email}`;

    fs.writeFile(`${fileName}.md`, fileText, (err) => {
        if (err) {
            console.error(err);
        }
    })
}

// TODO: Create a function to initialize app
async function init() {
    var info = await inquirer.prompt(questions);
    console.log(info);
    writeToFile(info.title, info)
}

// Function call to initialize app
init();