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
    taskController.createTask(description)
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
    taskController.deleteTasks(Id);
  });


program
  .command('mark <Id>')
  .alias('mk')
  .description('schedule task')
  .action((Id) => {
    taskController.updateTask(Id)
  });


program.parse(process.argv);
