import chalk from 'chalk'
import {Db} from '../database/ConectionDB.js'

export function ListTasks(){
   console.log('=================================== \n        LISTA DE TAREFAS \n===================================\n')
   Db.all('SELECT * FROM tasks', (err, rows) => {
      if(err) console.log(err.message)
      rows.forEach(({id, completed, description}) => {
         console.log(`${chalk.gray(`${id}.`)} ${completed ? `${chalk.green(`✔️ ${chalk.gray(`${description}`)}`)}` : `${description}`}`)
      })
   })
}
