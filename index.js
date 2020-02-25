var inquirer = require("inquirer")
var make = require("./generateMarkdown")
var fs = require("fs")

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err) {
            console.log(err)
        } else console.log("YUP")
    })
}

inquirer.prompt([{
    type: "input",
    message: "What is your GitHub username?",
    name: "username"
},{
    type: "input",
    message: "What is your email address?",
    name: "email"
},{
    type: "input",
    message: "What is your projects name?",
    name: "title"
},{
    type: "input",
    message: "Please write a short description of your project",
    name: "description"
},{
    type:"list",
    message: "What type of license should your project have?",
    choices: [
        "ISC",
        "MIT",
        "Apache 2.0",
        "BSD",
        "GPLv3"
    ],
    name: "license" 
},{
    type: "input",
    message: "What command should be run to install dependencies?",
    name: "install",
    default: "npm install"
}, {
    type: "input",
    message: "What command should be run to run tests?",
    name: "tests",
    default: "npm test"
}, {
    type: "input",
    message: "What does the user need to know about this repo?",
    name: "knowledge"
}, {
    type:"input",
    message: "What does the user need to know about contributing to the repo?",
    name: "contribute"
}]) 

.then(data => {
    writeToFile("generate.md", make.generateMarkdown(data))
})


