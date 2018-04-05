import { prompt } from "inquirer";
import { greeting } from "./constants";
// import { Greeter } from "./Greeter";

prompt([
  {
    name: "name",
    message: "What is your name?",
  },
  {
    name: "quest",
    message: "What is your quest?",
  }
]).then(responses => {
  console.log(`${greeting} "${responses.name}"`);
  console.log(`Good luck with, "${responses.quest}"`);
});
