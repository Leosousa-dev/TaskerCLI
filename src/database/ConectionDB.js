import chalk from 'chalk';
import sqlite3 from 'sqlite3'

export const Db = new sqlite3.Database('tasks.db', (err) => {
   if(err) throw err;
 });
 Db.run(`CREATE TABLE IF NOT EXISTS tasks (
 
   id            INTEGER PRIMARY KEY AUTOINCREMENT,
   description   TEXT NOT   NULL,
   completed     INTEGER NOT NULL DEFAULT 0
 )`, (err) => {
   if (err) {
     console.error(err.message);
   }
   console.log(chalk.yellow.bold.underline('tudo certo aqui'))
 });
 