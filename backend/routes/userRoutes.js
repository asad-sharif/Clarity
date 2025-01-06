import express from "express";
import { deleteUser, getUser, loginUser, logoutUser, registerUser } from "../controllers/userControllers.js";
import { protect } from "../middlewares/protectMiddleware.js";

const userRouter = express.Router()

userRouter.post('/', registerUser) 
userRouter.delete('/:id', deleteUser) 
userRouter.post('/login', loginUser) 
userRouter.post('/logout', logoutUser) 
userRouter.get('/profile/:id', protect, getUser)

export default userRouter