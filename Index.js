
const fs = require("fs");

const inquirer = require("inquirer");
const path = require("path");



const Employee = require("./lib/Employee");
const Engineer  = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

const generatePage= require("./src/generateProfile");

const teamArray = [];


// Starting prompt 
function startingPrompt() {
  inquirer
    .prompt([
      {
        message:
       "Welcome, please write your team name",
        name: "team",
        default: "My Team"
      },
    ])
    .then(function (data) {
      const teamName = data.teamname;
    //   teamArray.push(teamName);
      addManager();
    });
}



// Add Manager 
function addManager() {
    inquirer.prompt([
        {
            message: "What is your team manager's name?",
            name: "name",
            default: "Kristen"
        },
        {
            message: "What is your team manager's email address?",
            name: "email",
            default :"test@test.com"
        },

        {
            type: "number",
            message: "What is your team manager's office number?",
            name: "officeNumber",
            default: "555-555-555"
        },
    ])

        .then(function (data) {
            const name = data.name
            const id = 1
            const email = data.email
            const officeNumber = data.officeNumber
            const teamMember = new Manager(name, id, email, officeNumber)
            teamArray.push(teamMember)
            addTeamMembers();
        });
    }

// Add Team Members
function addTeamMembers() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Would you like to add more team members?",
        choices: [
          "Yes, add an engineer",
          "Yes, add an intern",
          "No, my team is complete",
        ],
        name: "addMemberData",
      },
    ])

    .then(function (data) {
      switch (data.addMemberData) {
        case "Yes, add an engineer":
          addEngineer();
          break;

        case "Yes, add an intern":
          addIntern();
          break;
        case "No, my team is complete":
        console.log(teamArray);
         const html =  generatePage(teamArray);
         console.log(html);
         fs.writeFile(
           "./dist/index.html",
           html,
           (err) => {
             if (err) throw err;

             console.log(
               "Team complete! Check out index.html to see the output!"
             );
           }
         );
          break;
      }
    });
}

//Add Engineer 
function addEngineer() {
    inquirer.prompt([
        {
            message: "What is this engineer's name?",
            name: "name",
            default : "Test"
        },
        {
            message: "What is this engineer's email address?",
            name: "email",
            default: "test2@test.com"
        },
        {
            message: "What is this engineer's Github profile?",
            name: "github",
            default : "Mayorgak"
        }
    ])

        .then(function (data) {
            const name = data.name
            const id = teamArray.length + 1
            const email = data.email
            const github = data.github
            const teamMember = new Engineer(name, id, email, github)
            teamArray.push(teamMember)
            addTeamMembers()
        });

};

//Add Intern 
function addIntern() {
    inquirer.prompt([
        {
            message: "What is this intern's name?",
            name: "name",
            default: "Intern"
        },
        {
            message: "What is this intern's email address?",
            name: "email",
            default: "intern@test.com"
        },
        {
            message: "What is this intern's school?",
            name: "school",
            default : "UCF"
        }
    ])

        .then(function (data) {
            const name = data.name
            const id = teamArray.length + 1
            const email = data.email
            const school = data.school
            const teamMember = new Intern(name, id, email, school)
            teamArray.push(teamMember)
            addTeamMembers()
        });

};






// });

 


startingPrompt();

