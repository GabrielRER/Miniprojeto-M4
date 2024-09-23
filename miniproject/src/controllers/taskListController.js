import List from "../model/taskListModel.js";

let listTasks = [];

export const createTask = (task, deadline, tag) => {
    let item = new List(task, deadline, tag);
    listTasks.push(item);
    return item;
};

export const showList = () => {
    return listTasks;
};

export const searchTask = (id) => {
    const existingTask = listTasks.find(task => task.id == id);
    return existingTask;

};

export const taskDone = () => {
    return listTasks.filter(({ done }) => done == true);
};

export const taskNotDone = () => {
    return listTasks.filter(({ done }) => done == false);
};

export const doneUpdate = (id) => {
    const existingTask = listTasks.find(task => task.id == id);

    if(existingTask) {
        const searchIndex = listTasks.findIndex(task =>task.id == id);
        listTasks[searchIndex].changeDone();
        return listTasks[searchIndex];
    } else {
        "This task was not found"
    }
}

export const deleteTask = (id) => {
    const existingTask = listTasks.find(task => task.id == id);

    if(existingTask) {
        const searchIndex = listTasks.findIndex(task => task.id == id);
        listTasks.splice(searchIndex,1);
        
    } else {
        "Unable to delete task"
    }

}

export const editTask = (id, newTask, newDeadline, newTag) => {
    const existingTask = listTasks.find(task => task.id == id);

    if (existingTask) {
        const searchIndex = listTasks.findIndex(task => task.id == id);
        listTasks[searchIndex].editTask(newTask, newDeadline, newTag);
        return listTasks[searchIndex];
    } else {
        return "Essa tarefa não existe"
    }
}
