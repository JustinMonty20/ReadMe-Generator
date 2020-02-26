const inquirer = require("inquirer")
const make = require("./generateMarkdown")
const axios = require("axios")
const fs = require("fs")

const writeToFileAsync = (fileName, data) => {
    return new Promise ((resolve, reject)=>{
        fs.writeFile(fileName, data, err => {
            if(err) {
                return reject(err);
            } 
            resolve("Saving")
        })

    })
}

let questions = [{
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
}]
function init(){
inquirer.prompt(questions) 
.then(response => {
    axios.get('https://api.github.com/users/' + response.username)
        .then(({data}) => {
            writeToFileAsync("generate.md", make({...data, ...response})
            )})
    }
)}
init();