#! usr/bin/env node 
import inquirer from "inquirer";

console.log("wellcome to shifa's project - CLI Number Guessing Game");

const randomNum = Math.floor(Math.random()* 5+1);

const answer = await inquirer.prompt([
    {
        name: "userGuessingNumber",
        type: "number",
        message: "enter your guess number(number list from 1 to 5):",
    
    }
])

if (answer.userGuessingNumber === randomNum){
    console.log("congrtulations! you guess a correct number.");
}
else{
    console.log("sorry, you guess a wrong number.");
}