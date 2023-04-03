const fs = require('fs');
const inquirer = require('inquirer');
const badge = require('badge-maker');

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
      message: "Please provide a description of your project:?",
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
      },  {
    type: 'input',
    name: 'contributing',
    message: 'How can someone contribute to your project?',
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
    choices: ['MIT', 'Apache', 'GPL', 'BSD', 'Other'],
  },
  {
    type: 'input',
    name: 'badge',
    message: 'Please provide a link for your badge:',
  },
  ])

  .then((answers) => {
    const { title, description, installation, usage, contributing, tests, license, badge } = answers;
 

  const badgeOptions = {
    label: 'License',
    message: answers.license,
    color: 'blue',
  };


  const licenseBadge = badge.create(badgeOptions);


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
  `;


  fs.writeFile('README.md', readme, (err) => {
    if (err) throw err;
    console.log('README file created!');
  });
});



