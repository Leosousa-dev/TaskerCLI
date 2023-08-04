#!/usr/bin/env node
import { Command } from "commander";
import chalk from "chalk";
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
    taskController.listTasks();
  });

program
  .command('delete <Id>')
  .alias('dl')
  .description('delete task')
  .action((Id) => {
   let id = parseInt(Id)
    taskController.deleteTasks(id);
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
