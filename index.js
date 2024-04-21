#!/usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answres = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "please guess a number between 1 to 6"
    }
]);
if (answres.userGuessNumber === randomNumber) {
    console.log("congratulations you guessed right number");
}
else {
    console.log("opps! you guessed a wrong number");
}
;
