import {Db} from '../database/ConectionDB.js'


export function CreateTask(description,completed){
   Db.run('INSERT INTO  tasks (description, completed) VALUES (?, ?)', [description, completed])
   Db.close();
}