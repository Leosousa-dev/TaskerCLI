#!/usr/bin/env node
import { Command } from "commander";
import chalk from "chalk";
import { CreateTask } from "./commands/create.js";
import {ListTasks } from "./commands/list.js";
import { Delete } from "./commands/delete.js";
import { Update } from "./commands/update.js";


const program = new Command();

program
.name('TaskerCLI')
.description('CLI to create a simple tasks')
.version(chalk.yellow.bold.underline('0.0.1'));

program
  .command('create <description>')
  .alias('cr')
  .action((description) => {
    if(description === undefined) return;
    CreateTask(`${description}`, 0)
    console.log(chalk.green.bold('✔️ Tarefa adicionada com sucessso'))
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
  });


program
  .command('update <Id>')
  .alias('up')
  .description('update tasks')
  .action((Id) => {
    let id = parseInt(Id)
    Update(id)
  });


program.parse(process.argv);
