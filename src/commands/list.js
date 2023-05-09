import chalk from 'chalk'
import {Db} from '../database/ConectionDB.js'

export function ListTasks(){
   Db.all('SELECT * FROM tasks', (err, rows) => {
      if(err) console.log(err.message)
      rows.forEach((row) => {
         console.log(`${chalk.yellow(row.id)}   ${row.completed ? '✅' : '[ ]'}  ${row.description}`  )
      })
   })
}
