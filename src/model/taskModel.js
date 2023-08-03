import { Db } from "../database/ConectionDB.js";

export function createTask(description, completed){
    const sql = 'INSERT INTO  tasks (description, completed) VALUES (?, ?)'
    const params = [description, completed]
    Db.run(sql, params, (err) => {
        if(err){
            console.error('Error creating task:', err.message)
        }
        console.log('Task created ✅ successfully!')

    })
    // console.log('data', description, completed)
    Db.close()
}
