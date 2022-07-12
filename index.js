import fs from 'fs';
import inquirer from 'inquirer';
import generateRead from './utils/generateMarkdown.js';


// TODO: Include packages needed for this application


const questions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter the name of your project!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description of your project.(Required)',
      validate: descInput => {
        if (descInput) {
          return true;
        } else {
          console.log('Please enter description!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'install',
      message: 'Please enter installation instructions.(Required)',
      validate: installInput => {
        if (installInput) {
          return true;
        } else {
          console.log('Please enter installation instructions!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please enter installation instructions.(Required)',
      validate: installInput => {
        if (installInput) {
          return true;
        } else {
          console.log('Please enter installation instructions!');
          return false;
        }
      }
    },

    {
      type: 'list',
      name: 'license',
      message: 'Please enter installation instructions.(Required)',
      choices: [
        "GNU",
        "ISC",
        "MIT",
        "Mozilla",
        "Open"
    ]
    },
    
    {
      type: 'input',
      name: 'credit',
      message: 'Enter your GitHub username.(Required)',
      validate: installcredit=> {
        if (installcredit) {
          return true;
        } else {
          console.log('Please enter your GitHub username!');
          return false;
        }
      
      }
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please enter what tests have been completed.'
    },
    {
      type: 'input',
      name: 'info',
      message: 'Place email information.'
    }
  ]);
};



questions()

.then(ReadData => {
  const pageREAD = generateRead(ReadData);


  fs.writeFile('./dist/README.md', pageREAD, err => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('Page created! Check out READ.me in this directory to see it!');
  
  });

});


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
