#!/usr/bin/env node
import { Command } from "commander";
import chalk from "chalk";
import sqlite3 from 'sqlite3'

const program = new Command();


const Db = new sqlite3.Database('tasks.db', (err) => {
  if(err) throw err;
  console.log(chalk.greenBright('✔️ Conectado ao banco de dados SQLite.'))
});
Db.run(`CREATE TABLE IF NOT EXISTS tasks (

  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  description   TEXT NOT   NULL,
  completed     INTEGER NOT NULL DEFAULT 0
)`, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Tabela criada com sucesso.');
});


program
.name('TaskerCLI')
.description('CLI to create a simple tasks')
.version(chalk.yellow('0.0.1'));

program
  .version('1.0.0')
  .description('A simple CLI program')
  .option('-n, --name <name>', 'Your name')
  .option('-a, --age <age>', 'Your age')
  .action(({ name, age }) => {
    console.log(chalk.yellowBright.bold(`${name} and ${age}`))
});



program.parse(process.argv);
