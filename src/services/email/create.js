import chalk from "chalk";
import handle from "./handle.js";

async function createEmail() {
console.log(chalk.green("gmail"));

const gmail = await handle();

console.log(gmail);
}

export default createEmail;
