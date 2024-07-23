import { Router } from "express";
import { createTask, showList, searchTask, taskDone, taskNotDone, doneUpdate, deleteTask, } from "../controllers/taskListController.js";

const listRouter = Router();

listRouter.post("/createtask", (req,res) => {
    const {task, deadline, tag, done} = req.body;
    const newTask = createTask(task, deadline, tag, done);
    res.status(200).json({ newTask });
});

listRouter.get("/listtask", (req, res) => {
    const listTask = showList();
    res.status(200).json({ listTask });
});

listRouter.get("/search/:id", (req, res) => {
    const { id } = req.params;
    const search = searchTask(id);
    res.status(200).json({ search });
});

listRouter.get("/taskdone", (req, res) => {
    const taskCompleted = taskDone();
    res.status(200).json({ taskCompleted });
});

listRouter.get("/tasknotdone", (req, res) => {
    const taskIncompleted = taskNotDone();
    res.status(200).json({ taskIncompleted });
})

listRouter.patch("/changedone/:id", (req, res) => {
    const { id } = req.params;
    const update = doneUpdate(id);
    res.status(200).json({ update });
})

listRouter.delete("/deletetask/:id", (req,res) => {
    const { id } = req.params;
    const taskDelete = deleteTask(id);
    res.status(200).json({ taskDelete });
})

export { listRouter };