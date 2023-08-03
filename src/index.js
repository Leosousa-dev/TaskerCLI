#!/usr/bin/env node
import { Command } from "commander";
import chalk from "chalk";
// import { CreateTask } from "./commands/create.js";
import {ListTasks } from "./commands/list.js";
import { Delete } from "./commands/delete.js";
import { Update } from "./commands/update.js";
import { createTask } from "./model/taskModel.js";
import { taskController } from "./controller/taskController.js";

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
    taskController.createTask(`${description}`, 0)
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
  .command('mark <Id>')
  .alias('mk')
  .description('schedule task')
  .action((Id) => {
    let id = parseInt(Id)
    Update(id)
  });


program.parse(process.argv);
