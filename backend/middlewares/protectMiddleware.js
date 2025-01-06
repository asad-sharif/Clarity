import { User } from "../models/userModel.js"
import jwt from "jsonwebtoken";

export const protect = async (req, res, next) => {
    const token = req.cookies.jwt

    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_KEY)
            req.user = await User.findById(decoded.userId).select('-password')
            next()
        } catch (error) {
            return res.status(401).json({ message: 'Unauthorized - invalid token' })
        }
    } else {
        return res.status(401).json({ message: 'Unauthorized - token not found' })
    }
}