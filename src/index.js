#!/usr/bin/env node
import { Command } from "commander";
import chalk from "chalk";
import {Db} from './database/ConectionDB.js'
import { CreateTask } from "./commands/create.js";


const program = new Command();

program
.name('TaskerCLI')
.description('CLI to create a simple tasks')
.version(chalk.yellow('0.0.1'));

program
  .option('-d, --description <description>', 'description task')
  .action(({ description }) => {
    CreateTask(`${description}`, 0)
});

program.parse(process.argv);
