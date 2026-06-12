import mongoose from "mongoose";

const connectDB = () => {
    return mongoose.connect(process.env.MONGO_URL as string);
}

export default connectDB;