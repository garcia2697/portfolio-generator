
export default generateMarkdown => {

  // destructure page data by section
  const {placeholder, ...data }=generateMarkdown;



  return `

  
  PROJECT TITLE: 
  #<h1 align="center">${data.title}</h1>

  [![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)

  PROJECT DESCRIPTION: 
  ## ${data.description}
  

  ## Table of Contents
  - [DESCRIPTION]
  - [TABLE OF CONTENTS]
  - [Installation]
  - [Usage]
  - [License]
  - [Credits]
  - [Usage]
  - [Question]
  

  Installation
  ## ${data.install}

  Usage
  ## ${data.usage}

  ## License
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
  <br />
  This application is covered by the ${data.license} license. 

  Contribution
  ## This was made by https://github.com/${data.credit}

  Tests
  ##${data.tests}
  

  QUESTIONS
  Feel free to reach me at ##${data.info}
  My GitHub account is https://github.com/${data.credit}

  `;
};
