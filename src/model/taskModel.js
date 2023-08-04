import { Db } from "../database/ConectionDB.js";
import chalk from "chalk";

export function createTask({description, completed}){
    const sql = 'INSERT INTO  tasks (description, completed) VALUES (?, ?)';
    const params = [description, completed];
    Db.run(sql, params, (err) => {
        if(err){
            console.error('Error creating task:', err.message)
        }
        console.log('Task created ✅ successfully!')

    });
    console.log('data', description, completed)
    Db.close();
};
export function listTasks(){
    const sql = 'SELECT * FROM tasks'
    Db.all(sql, (err, rows) => {
        if(err){
            console.log(err.message)
        }
        rows.forEach((task) => {
            console.log(task.id, task.description, task.completed);
        });             
    });
    Db.close();
};
export function deleteTask(id){
    const sql = 'SELECT COUNT(*) AS count FROM tasks WHERE id = ?';
    Db.get(sql, id, (err, row) => {
        if(err){
            console.log(err.message)
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
        };
    });
};
export function updateTask(id){
    const sql = 'UPDATE tasks SET completed = NOT completed WHERE id = ?'
    Db.run(sql, [id])
    console.log(id)
    Db.close()
}