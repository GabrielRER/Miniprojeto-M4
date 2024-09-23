import { Router } from "express";
import { createTask, showList, searchTask, taskDone, taskNotDone, doneUpdate, deleteTask, editTask} from "../controllers/taskListController.js";

const listRouter = Router();

// Criar tarefa

listRouter.post("/createtask", (req,res) => {
    const {task, deadline, tag} = req.body;
    const newTask = createTask(task, deadline, tag);
    res.status(200).json({ newTask });
});

// Listar tarefas

listRouter.get("/listtask", (req, res) => {
    const listTask = showList();
    res.status(200).json({ listTask });
});

// Procurar Tarefa

listRouter.get("/search/:id", (req, res) => {
    const { id } = req.params;
    const search = searchTask(id);
    res.status(200).json({ search });
});

// Listar tarefas concluídas

listRouter.get("/taskdone", (req, res) => {
    const taskCompleted = taskDone();
    res.status(200).json({ taskCompleted });
});

// Listar tarefas não concluídas

listRouter.get("/tasknotdone", (req, res) => {
    const taskIncompleted = taskNotDone();
    res.status(200).json({ taskIncompleted });
})

// Mudar status de conclusão de tarefa

listRouter.patch("/changedone/:id", (req, res) => {
    const { id } = req.params;
    const update = doneUpdate(id);
    res.status(200).json({ update });
})

// Deletar tarefa

listRouter.delete("/deletetask/:id", (req,res) => {
    const { id } = req.params;
    const taskDelete = deleteTask(id);
    res.status(200).json({ taskDelete });
})

// Editar tarefa 

listRouter.patch("/updateTask/:id", (req, res) => {
    const { id } = req.params;
    const { newTask, newDeadline, newTag} = req.body;
    const updateTask = editTask(id, newTask, newDeadline, newTag);
    res.status(200).json({updateTask})
})

export { listRouter };