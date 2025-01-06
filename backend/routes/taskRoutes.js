import express from "express";
import { createTask, deleteTask, deleteTasks, editTask, getTasks } from "../controllers/taskControllers.js";
import { protect } from "../middlewares/protectMiddleware.js";

const taskRouter = express.Router()

taskRouter.route('/')
    .get(protect, getTasks)
    .post(protect, createTask)
    .delete(protect, deleteTasks)

taskRouter.route('/:id')
    .put(protect, editTask)
    .delete(protect, deleteTask)

export default taskRouter