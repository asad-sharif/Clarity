import mongoose from "mongoose";

const DB_STRING = process.env.DB_URI

const connectDB = async () => {
    try {
        if (!DB_STRING) {
            console.log('-----> DB connection string not found');
            process.exit(1)
        }

        const conn = await mongoose.connect(DB_STRING)
        console.log(`-----> DB connected at: ${conn.connection.host}`);
    } catch (error) {
        console.log('-----> Failed to connected DB:', error);
        process.exit(1)
    }
}

export default connectDB