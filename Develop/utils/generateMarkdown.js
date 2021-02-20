// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `
  # ${data.title}  
  
  ## Contents  
  [Description](#description)  
  [Installation](#installation)  
  [Usage](#usage)  
  [Contribution](#contribution)  
  [Testing](#testing)  
  [License](#license)  
  [Questions](#questions)  
  
  ### Description {#description}  
  ${data.description}  
  
  ### Installation {#installation}  
  ${data.installation}  
  
  ### Usage {#usage}  
  ${data.usage}  
  
  ### Contributing {#contribution}  
  ${data.contribution}  
  
  ### Testing {#testing}  
  ${data.test}  
  
  ### License {#license}  
  
  ### Questions? {#questions}  

  `;
}

module.exports = generateMarkdown;
