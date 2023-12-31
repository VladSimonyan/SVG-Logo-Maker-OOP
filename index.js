const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./gen.js');
const fileName = "./SVG IMG.png";
const setShape = require('./SetShape.js')

function createLogo(response) {
    const svg = setShape(response);
    fs.writeFile(fileName, svg, ()=> console.log('Generated SVG IMG.png'));
}

function init() {
    inquirer 
    .prompt(questions)
    .then((response) => {
        createLogo(response);
        })
    .catch(err => {
            console.log(err)
        });
}

init();
