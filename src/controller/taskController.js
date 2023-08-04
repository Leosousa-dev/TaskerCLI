import { createTask, listTasks, deleteTask } from "../model/taskModel.js"

export const taskController = {
    createTask: function(description, completed){
        const taskData = {
            description,
            completed 
        } 
        createTask(taskData);
    },
    listTasks: function(){
        listTasks();
    },
    deleteTasks: function(id){
        deleteTask(id);
    }
};
