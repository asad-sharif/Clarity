import express from "express";
import connectDB from "./config/db.js";
import userRouter from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";
import taskRouter from "./routes/taskRoutes.js";

const PORT = process.env.PORT || 8000;

const app = express();
connectDB();

// middlewares
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/api/user/', userRouter);
app.use('/api/tasks/', taskRouter);
app.get('/', (req, res) => {
    throw new Error("Error aa gya bhai");
});

// error-handling middleware
app.use((err, req, res, next) => {
    // console.error(err.stack); // Log the error for debugging
    return res.status(500).json({
        message: 'Internal server error',
        error: err.stack, // Include error message for easier debugging
    });
});

app.listen(PORT, () =>
    console.log(`Server is running on port http://localhost:${PORT}`)
);
