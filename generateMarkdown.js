function generateMarkdown(data) {
  console.log(data)
    return `
  # ${data.title}

  ### ${data.description}

  ![shield](https://img.shields.io/badge/license-${data.license}-blue)

  # Table of Contents
  
  * [Installation](#installation)

  * [Tests](#tests)

  * [Usage](#usage)

  * [License](#license)

  * [Contributing](#contributing)


  # Installation 

  To install necessary dependencies run the following command 

  ${data.install}

  # Tests 

  To run tests, run the following command

  ${data.tests}

  # Usage

  ${data.knowledge}

  # License

  ${data.license}

  # Contributing 

  ${data.contribute}

  ![profile-image](${data.avatar_url}) 
  This Read-Me was created by <a>${data.email}</a> reach out if you have any questions about this project. 
  `;
  }
  
  module.exports = generateMarkdown
  