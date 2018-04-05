import { prompt } from "inquirer";
import { greeting, colors } from "./kitchenSink";

prompt([
  {
    name: "name",
    message: "What is your name?",
  },
  {
    name: "quest",
    message: "What is your quest?",
  },
  {
    name: "color",
    type: "list",
    message: "What is your favourite colour?",
    choices: colors,
  }
]).then(responses => {
  console.log(`${greeting} "${responses.name}"`);
  console.log(`Good luck with, "${responses.quest}"`);
});
