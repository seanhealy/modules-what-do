import chalk from "chalk";
import { foo } from "./constants";

console.log(foo);

console.log([
  chalk.red("Hello"),
  chalk.yellow("There"),
  chalk.green("World"),
].join(" "));
