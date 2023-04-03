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



 


inquirer.prompt(questions).then((answers) => {

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






// inquirer
//   .prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: "What is your name?",
//     },
//     {
//       type: 'input',
//       name: 'placeOfOrigin',
//       message: "Where are you from?",
//     },
//     {
//       type: 'input',
//       name: 'linkedInURL',
//       message: "What is your linked in URL?",
//     },
//     {
//         type: 'input',
//         name: 'gitHubURL',
//         message: "What is your GitHubURL in URL?",
//       },
//   ])
  
//   .then((answers) => {
//     const { name, placeOfOrigin, linkedInURL, gitHubURL} = answers;

//      var html = 
//    `<!DOCTYPE html>
//   <html lang="en">
//   <head>
//       <meta charset="UTF-8">
//       <meta http-equiv="X-UA-Compatible" content="IE=edge">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <title> PortfolioGen</title>
//   </head>
//   <body>
//       <h1> Portfolio Generator</h1>
//       <p> ${name}</p>
//        <p> ${placeOfOrigin} </p>
//        <a href="https://www.linkedin.com/feed/"> ${linkedInURL} </a>
//        <p> ${gitHubURL} </p>
  
//   </body>
//   </html>
//   ` 

//     fs.writeFile('index.html', html, (err) => {
//       if (err) {
//         console.error(err);
//       } else {
//         console.log('Data is saved!');
//       }
//     });
//   })
//   .catch((error) => {
//     console.error(error);
//   });

 