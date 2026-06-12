import express, { Application, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db";
dotenv.config();

const app:Application = express();

app.use(cors());
app.use(express.json());

app.get("/", (req:Request, res:Response) => {
    res.send("social-app running");
});

const port = process.env.PORT || 5000;
const serverStart = async() => {
    try {
        await connectDB();
        console.log("Connected to MongoDB");
        app.listen(port, () => {
            console.log(`server is running on port ${port}`);  
        }); 
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
        process.exit(1);
    }
}
serverStart();