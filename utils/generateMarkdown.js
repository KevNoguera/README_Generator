// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  const licenses = {
      'MIT': '![MIT License](https://img.shields.io/badge/license-MIT-brightgreen.svg)'
  };
  return licenses[license] || '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  const licenseLinks = {
    'APACHE_2.0': 'https://www.apache.org/licenses/LICENSE-2.0',
    'GPL_3.0': 'https://www.gnu.org/licenses/gpl-3.0.en.html',
    'BSD_2_CLAUSE': 'hhttps://opensource.org/license/bsd-2-clause',
    'BSD_3_CLAUSE': 'https://choosealicense.com/licenses/bsd-3-clause',
    'BSL_1.0': 'https://www.boost.org/LICENSE_1_0.txt',
    'CC0_1.0': 'https://choosealicense.com/licenses/cc0-1.0/',
    'EPL_2.0': 'https://www.eclipse.org/legal/epl-2.0/',
    'AGPL_3.0': 'https://www.gnu.org/licenses/agpl-3.0.en.html',
    'GPL_2.0': 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html',
    'LGPL_2.1': 'https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html',
    'MPL_2.0': 'https://www.mozilla.org/en-US/MPL/2.0/',
    'MIT': 'https://opensource.org/license/mit',
    'UNLICENSE': 'https://opensource.org/license/unlicense'
  };

  return licenseLinks[license] || '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
  if (license === 'none') {
      return '';
  }
  
  return `## License

This project is licensed under the ${license}. Click the link for more details: ${renderLicenseLink(license)}`;
}

const currentYear = new Date().getFullYear();

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

export default generateMarkdown;
