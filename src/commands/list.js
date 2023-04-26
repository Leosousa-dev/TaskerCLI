import {Db} from '../database/ConectionDB.js'

export function ListTasks(){
   Db.all('SELECT * FROM tasks', (err, rows) => {
      if(err) console.log(err.message)
      rows.forEach((row) => {
         console.log(`${row.id} ---- ${row.description} ---- ${row.completed}`)
      })
   })
}
