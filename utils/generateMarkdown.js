// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `\n* [License] (#license)\n`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return `\n* [License] (#license)\n`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return `\n* [License] (#license)\n`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  by ${data.name}
  ${renderLicenseBadge(data.license)}
  ## Table of Contents
  * [Description](#description)
  * [Requirements](#requirements)
  * [Usage](#Usage)
  * [Contact-Me](#Contact-Me)
  * [Contributers](#contributers)
  ${renderLicenseLink(data.license)}
  ## Description
  ${data.description}
  ## Requirements
  ${data.installation}
  ## Requirements
  ${data.requirements}
  ## Usage
  ${data.usage}
  ## Contact-Me
 * Name - ${data.name}
 * Email - ${data.email}
 * GitHub - [${data.username}](https://github.com/${data.username}/)
 ## Contributers
 ${data.contributers}
 ## Testing
 \`\`\`
 ${data.test}
 \`\`\`
 ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
