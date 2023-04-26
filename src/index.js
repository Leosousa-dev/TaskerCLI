#!/usr/bin/env node
import { Command } from "commander";
import chalk from "chalk";
import {Db} from './database/ConectionDB.js'
import { CreateTask } from "./commands/create.js";
import {ListTasks } from "./commands/list.js";


const program = new Command();

program
.name('TaskerCLI')
.description('CLI to create a simple tasks')
.version(chalk.yellow.bold.underline('0.0.1'));

program
  .option('-d, --description <description>', 'description task')
  .action(({ description }) => {
    if(description === undefined) return;
    CreateTask(`${description}`, 0)
});


program
  .command('list')
  .alias('l')
  .description('list all tasks')
  .action(() => {
    ListTasks();
  });



program.parse(process.argv);
