import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: [true, 'UserId is required in schema'] },
    title: { type: String, required: [true, 'Title is required in schema'] },
    description: { type: String },
    status: { type: String, default: 'incomplete' },
},
    { timestamps: true }
)

export const Tasks = mongoose.model('Task', taskSchema)