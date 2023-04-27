import {Db} from '../database/ConectionDB.js'

export function Delete(id){
   Db.run('DELETE FROM tasks WHERE id = ?', id);
   Db.close();
}