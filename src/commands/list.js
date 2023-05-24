import chalk from 'chalk'
import {Db} from '../database/ConectionDB.js'

export function ListTasks(){
   console.log('=================================== \n        LISTA DE TAREFAS \n===================================\n')
   Db.all('SELECT * FROM tasks', (err, rows) => {
      if(err) console.log(err.message)
      rows.forEach(({id, completed, description}) => {
         console.log(`${chalk.gray(`${id}.`)} ${completed ? `${chalk.green(`✔️ ${chalk.gray(`${chalk.strikethrough(`${description}`) }`)}`)}` : `${description}`}\n`)
      })
      console.log(chalk.yellow.bold(`📜 use o comando ${chalk.underline('mark')} ou ${chalk.underline('mk')} para marca uma nova tarefa como completa.`))
   })
}