import {Db} from '../database/ConectionDB.js'
import chalk from 'chalk';


export function Delete(id){
   const query = `SELECT COUNT(*) AS count FROM tasks WHERE id = ?`;
   Db.get(query, [id], (err, row) => {
      if(err){
         console.error(err)
      }
      else{
         if(row.count === 0){
            console.log(chalk.red.bold(`⛔️  A tarefa com id ${chalk.underline(id)} não existe.\n`))
         }
         else{
            Db.run('DELETE FROM tasks WHERE id = ?', id);
            Db.close();
            console.log(chalk.yellow.bold(`🗑️  A tarefa com id ${chalk.underline(id)} foi deletada com sucesso.`))
         }
      }
   })
   // if(id !== undefined){
   //    Db.run('DELETE FROM tasks WHERE id = ?', id);
   //    Db.close();
   // }
}