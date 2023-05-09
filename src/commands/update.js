import { Db } from "../database/ConectionDB.js"

export function Update(id){
   Db.run(`UPDATE tasks SET completed = 'true' WHERE id = ?`,[id])
   console.log(id)
   Db.close()
}