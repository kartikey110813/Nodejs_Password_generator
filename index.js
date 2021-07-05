#!/usr/bin/env node
const program = require("commander");
const createdPassword = require("./utils/createPassword");
const chalk = require("chalk");
const clipboardy = require("clipboardy");
const savePassword = require("./utils/savePassword");

program.version("1.0.0").description("Random password Generator");
program
  .option("-l,--length <number>", "length of Password", "8")
  .option("-s,--save ", "Save Password to Passwords.txt")
  .option("-nn,--no-numbers ", "Remove numbers")
  .option("-ns,--no-symbols ", "Remove Symbols")
  .parse();

const { length, save, numbers, symbols } = program.opts();

// Get generated Password
const generatedPassword = createdPassword(length, numbers, symbols);

// Save to file
if (save) {
  savePassword(generatedPassword);
}

// copy to clipboard
clipboardy.writeSync(generatedPassword);

// Output the generated Password
console.log(
  chalk.blue("Generated Password : ") + chalk.bold(generatedPassword)
);
console.log(chalk.yellow("Password is copied to clipboard"));
