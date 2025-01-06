import { User } from "../models/userModel.js"
import { generateToken } from "../utils/generateToken.js"


// POST Register User
export const registerUser = async (req, res) => {
    const { name, email, password } = req.body

    const userExists = await User.findOne({ email })
    if (userExists) return res.status(400).json({ message: 'User already exists' })

    try {
        const user = await User.create({ name, email, password })
        return res.status(201).json({ message: 'User registered successfully', user })
    } catch (error) {
        return res.status(500).json({ message: 'User registration failed', error })
    }
}

// POST Login User
export const loginUser = async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (user && (await user.matchPassword(password))) {
        generateToken(res, user._id)
        return res.status(200).json({
            message: 'User logged in successfully',
            id: user._id,
            email: user.email,
            name: user.name
        })
    } else {
        return res.status(401).json({ message: 'Invalid email or password' })
    }

}

// GET Get User User Profile
export const getUser = async (req, res) => {
    const user = req.user

    res.status(200).json(user)   
}

// DELETE User Profile
export const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        return res.status(200).json({ message: "User deleted successfully" })
    } catch (error) {
        return res.status(400).json({ message: "Failed to delete user", error })
    }
}

// POST Logout User
export const logoutUser = async (req, res) => {
    try {
        res.cookie('jwt', '', {
            httpOnly: true,
            expires: new Date(0)
        })
        return res.status(200).json({ message: 'User logged out successfully' })
    } catch (error) {
        return res.status(200).json({ message: 'User logged out failed', error })
    }
}