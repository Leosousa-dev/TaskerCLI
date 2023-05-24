import { Db } from "../database/ConectionDB.js"

export function Update(id){
   const query = 'UPDATE tasks SET completed = NOT completed WHERE id = ?'
   Db.run(query, [id])
   console.log(id)
   Db.close()
}