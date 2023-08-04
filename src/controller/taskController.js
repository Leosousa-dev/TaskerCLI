import { createTask, listTasks, deleteTask, updateTask } from "../model/taskModel.js"

export const taskController = {
    createTask: function(description){
        const taskData = {
            description,
            completed: false
        } 
        createTask(taskData);
    },
    listTasks: function(){
        listTasks();
    },
    deleteTasks: function(Id){
        let id = parseInt(Id)
        deleteTask(id);
    },
    updateTask: function(Id){
        let id = parseInt(Id)
        updateTask(id)
    }
};
