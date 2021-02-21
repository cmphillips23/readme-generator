// Returns the license link
const renderLicenseLink = license => {
  if (license === "MIT") {
    licenseLink = "https://opensource.org/licenses/MIT";
  } else if (license === "GNU GPL 3.0") {
    licenseLink = "https://opensource.org/licenses/GPL-3.0";
  } else if (license === "GNU LGPL 3.0") {
    licenseLink = "https://opensource.org/licenses/LGPL-3.0";
  } else if (license === "Apache") {
    licenseLink = "https://opensource.org/licenses/Apache-2.0";
  } else if (license === "ISC") {
    licenseLink = "https://opensource.org/licenses/ISC";
  } else if (license === "Mozilla Public License 2.0"); {
    licenseLink = "https://opensource.org/licenses/MPL-2.0";
  }
}

// Returns modified name of license to be compatible with badge url
/* const renderLicenseBadge = license => {
  if (license === "GNU GPL 3.0") {
    licenseBadge = "(https://img.shields.io/badge/license-GNU%20GPL%203.0-blue)";
  } else if (license === "GNU LGPL 3.0") {
    licenseBadge = "(https://img.shields.io/badge/license-GNU%20LGPL%203.0-blue)";
  } else if (license === "Mozilla Public License 2.0") {
    licenseBadge = "(https://img.shields.io/badge/license-Mozilla%20Public%20License%202.0-blue)";
  } else if (license === "ISC") {
    licenseBadge = "(https://img.shields.io/badge/license-ISC-blue)";
  } else if (license === "Apache") {
    licenseBadge = "(https://img.shields.io/badge/license-Apache-blue)";
  } else if (license === "MIT") {
    licenseBadge = "(https://img.shields.io/badge/license-MIT-blue)";
  }
} */

/* const renderLicenseNameChange = license => {
  var licenseName = license.toString()
  licenseName = license.replace(/\s+/g, "%20");
} */

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
/*   renderLicenseBadge(data); */
  renderLicenseLink(data);

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
  ${data.license}
  For more information on this license, visit this page: <${licenseLink}>

  ### Questions? {#questions} 
  If you have any further questions, you can reach me via email at <${data.email}>.  Also, check out my work on github! <https://github.com/${data.github}>

  `;
}

module.exports = generateMarkdown;
