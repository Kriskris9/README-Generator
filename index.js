const fs = require('fs');
const inquirer = require('inquirer');


inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: "What is the title of your project??",
    },
    {
      type: 'input',
      name: 'description',
      message: "Please provide a description of your project?",
    },
    {
      type: 'input',
      name: 'installation',
      message: "Are there any installations for this project?",
    },
    {
      type: 'input',
      name: 'usage',
      message: "How can you a user use your project?",
    }, {
      type: 'input',
      name: 'contributing',
      message: 'Did anyone help contribute to this project?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What are ways an individual can test your project?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Which license would you like to use for your project?',
      choices: ['MIT', 'Apache', 'BSD'],
    },
    {
      type: "input",
      name: "gitHubUserName",
      message: "Please enter your GitHub username along with a link to your GitHub profile.",
    },
    {
      type: "input",
      name: "linktoGitHubProfile",
      message: "Please enter a link to your GitHub profile.",
    },
    {
      type: "input",
      name: "gitHubEmail",
      message: "What is your GitHub email address that contributors may contact?",
    }
  ])

  .then((answers) => {

    const { title, description,  installation, usage, contributing, tests, license, gitHubUserName, gitHubEmail, linktoGitHubProfile } = answers;

    let licenseBadge;
    switch (license) {
      case 'MIT':
        licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        break;
      case 'Apache':
        licenseBadge = '[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        break;
      case 'BSD':
        licenseBadge = '[![License: BSD](https://img.shields.io/badge/License-BSD%203--Clause-orange.svg)](https://opensource.org/licenses/BSD-3-Clause)';
        break;
      default:
        licenseBadge = '';
    }

    const readme = `
# ${answers.title}

${licenseBadge}

## Description

${answers.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)


## Installation

${answers.installation}

## Usage

${answers.usage}

## Contributing

${answers.contributing}

## Tests

${answers.tests}

## License

This project is licensed under the ${answers.license} license.

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${answers.gitHubEmail}. My GitHub username is: ${answers.gitHubUserName}. Here is the link to my GitHub profile: ${answers.linktoGitHubProfile}.
  `;


    fs.writeFile('newREADME.md', readme, (err) => {
      if (err) throw err;
      console.log('README file created!');
    });
  });



