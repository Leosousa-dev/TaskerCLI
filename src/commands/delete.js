import chalk from "chalk";
// import { Db } from "../database/ConectionDB";

export function Delete(id){
   // Db.run('DELETE FROM tasks WHERE id = ?', id);
   // Db.close();
   console.log(chalk.underline.green(id))
}