function generateMarkdown(data) {
    return `
  # ${data.title}

  ### ${data.description}

  ![](https://img.shields.io/badge/dynamic/json?url=<URL>License=<LABEL>&query=${data.license}&color=blue&prefix=<PREFIX>&suffix=<SUFFIX>)

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

 ![]()
  `;
  }
  
  module.exports = {generateMarkdown: generateMarkdown};
  