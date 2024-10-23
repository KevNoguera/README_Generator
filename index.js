// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';

import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [  
    { type: 'input', name: 'title', message: 'What is the title of your project?' },
    { type: 'input', name: 'description', message: 'Provide a description of your project:' },
    { type: 'input', name: 'installation', message: 'Provide installation instructions:' },
    { type: 'input', name: 'code', message: 'Provide any code lines:' },
    { type: 'input', name: 'usage', message: 'Provide usage information:' },
    { type: 'input', name: 'contributing', message: 'Provide contribution guidelines:' },
    { type: 'input', name: 'tests', message: 'Provide test instructions:' },
    { type: 'list', name: 'license', message: 'Choose a license for your project:',
      choices: [
          { name: 'MIT License', value: 'MIT' },
          { name: 'None', value: 'none' },
          { name: 'Other', value: 'other'},
               ],
  },
  { when: (answers) => answers.license === 'other',
    type: 'input',
    name: 'userlicense',
    message: 'Enter the name of your custom license:',
},
{ type: 'input', name: 'github', message: 'GitHub Username:' },
{ type: 'input', name: 'email', message: 'Email Address:' }
];




// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log('README generated successfully!');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const markdown = generateMarkdown(answers);
            writeToFile('README.md', markdown);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

// Function call to initialize app
init();



