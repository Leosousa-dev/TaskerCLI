import sqlite3 from 'sqlite3'
import chalk from 'chalk';

export const Db = new sqlite3.Database('tasks.db', (err) => {
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
 