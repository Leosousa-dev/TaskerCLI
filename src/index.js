#!/usr/bin/env node
import { Command } from "commander";
import chalk from "chalk";
import {Db} from './database/ConectionDB.js'
import { CreateTask } from "./commands/create.js";
import {ListTasks } from "./commands/list.js";
import { Delete } from "./commands/delete.js";


const program = new Command();

program
.name('TaskerCLI')
.description('CLI to create a simple tasks')
.version(chalk.yellow.bold.underline('0.0.1'));

program
  .command('create <description>')
  .alias('c')
  .action((description) => {
    if(description === undefined) return;
    CreateTask(`${description}`, 0)
});


program
  .command('list')
  .alias('ls')
  .description('list all tasks')
  .action(() => {
    ListTasks();
   
  });

program
  .command('delete <Id>')
  .alias('dl')
  .description('delete task')
  .action((Id) => {
   let id = parseInt(Id)
    Delete(id);
  })
program.parse(process.argv);
