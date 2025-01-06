import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

const UserSchema = await mongoose.Schema({
    name: { type: String, required: [true, 'User name is required in schema'] },
    email: { type: String, required: [true, 'User email is required in schema'] },
    password: { type: String, required: [true, 'User password is required in schema'] },
},
    { timestamps: true }
)

UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)    
})

UserSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

export const User = mongoose.model('User', UserSchema)