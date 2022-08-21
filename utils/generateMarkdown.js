// exports the following function
export default generateMarkdown => {

  // destructure page data by section
  const {placeholder, ...data }=generateMarkdown;


// READme format is below. Answers picked in the inquire prompt will be placed below.
return `
PROJECT TITLE: 
#<h1 align="center">${data.title}</h1>

[![${data.license} license](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://lbesson.${data.license}-license.org/)

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
Feel free to reach me at ##${data.info}@gmail.com
My GitHub account is https://github.com/${data.credit}


`;
};
