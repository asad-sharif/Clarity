import { Tasks } from "../models/tasksModel.js"


// POST create a task
export const createTask = async (req, res) => {
    const { userId, title, description, status } = req.body

    try {
        const task = await Tasks.create({ userId, title, description, status })
        return res.status(201).json({ message: 'Task created successfully.', task })
    } catch (error) {
        return res.status(400).json({ message: 'Failed to create task', error })
    }
}

// GET get all task
export const getTasks = async (req, res) => {
    const userId = req.user._id
    const tasks = await Tasks.find({ userId }).lean()
    // .populate('userId', 'name')

    if (tasks) {
        return res.status(200).json({ message: 'Task fetched successfully.', tasks })
    } else {
        return res.status(500).json({ message: 'Failed to fetch tasks', error })
    }
}

// GET get a task
export const getSingleTask = async (req, res) => {
    const taskId = req.params.id
    const userId = req.user._id

    try {
        const task = await Tasks.findOne({ _id: taskId, userId })
        return res.status(200).json({ message: 'Task fetched successfully', task })
    } catch (error) {
        return res.status(500).json({ message: 'Failed to fetch the task', error })
    }
}

// DELETE delete all tasks
export const deleteTasks = async (req, res) => {
    const userId = req.user._id; // Get the userId from the req.user object

    try {
        const deleteAll = await Tasks.deleteMany({ userId }); // Delete all tasks for the logged-in user
        return res.status(200).json({ message: 'All tasks deleted successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'Failed to delete tasks', error });
    }
};

// DELETE  delete a single task
export const deleteTask = async (req, res) => {
    const id = req.params.id

    try {
        const task = await Tasks.findByIdAndDelete(id)
        return res.status(200).json({ message: 'Task deleted successfully' })
    } catch (error) {
        return res.status(500).json({ message: 'Failed to delete', error })
    }
}

// PUT edit a task
export const editTask = async (req, res) => {
    const userId = req.user._id; // Get the userId from the req.user object
    const taskId = req.params.id;
    const { title, description, status } = req.body;

    try {
        const task = await Tasks.findOne({ _id: taskId, userId }); // Ensure the task belongs to the user
        if (task) {
            task.title = title || task.title;
            task.description = description || task.description;
            task.status = status || task.status;
            await task.save();
            return res.status(200).json({ message: 'Task updated successfully', task });
        } else {
            return res.status(404).json({ message: 'Task not found' });
        }
    } catch (error) {
        return res.status(500).json({ message: 'Failed to update task', error });
    }
};