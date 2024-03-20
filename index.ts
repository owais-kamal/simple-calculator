import inquirer from "inquirer";
 
const asnwer = await inquirer.prompt([
  { message: "enter first number", type: "number", name: "firstnumber" },
   { MessageChannel: "enter second number",
    type: "number",
    name: "second number",
  },
  {
    message: "select one of the operators to perform action",
    type: "list",
    name: "operator",
    choices: ["addition", "subtraction", "multiplication", "division"],
  },
]); 

// conditional statement
if (asnwer.operator === "addition") {
  console.log(asnwer.firstNumber + asnwer.secondNumber);
} else if (asnwer.operator === "subtraction") {
  console.log(asnwer.firstNumber - asnwer.secondNumber);
} else if (asnwer.operator === "multiplication") {
  console.log(asnwer.firstNumber * asnwer.secondNumber);
} else if (asnwer.operator === "division") {
  console.log(asnwer.firstNumber / asnwer.secondNumber);
} else {
  console.log("please select valid operator");
}
