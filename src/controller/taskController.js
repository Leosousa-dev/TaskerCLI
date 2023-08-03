import { createTask } from "../model/taskModel.js"

export const taskController = {
    createTask: function(description, completed){
        const taskData = {
            description,
            completed
        }
        createTask(taskData);
    }
}
