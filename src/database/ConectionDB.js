import sqlite3 from 'sqlite3'

export const Db = new sqlite3.Database('tasks.db', (err) => {
   if(err) throw err;
 });

Db.exec(`CREATE TABLE IF NOT EXISTS tasks (
  
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  description   TEXT NOT   NULL,
  completed     BOOLEAN NOT NULL DEFAULT FALSE
)`, (err) => {
  if (err) {
    console.error(err.message);
  }
});

 