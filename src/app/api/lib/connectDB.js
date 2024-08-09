import mongoose from "mongoose";

const connectDB = async () => {
    try {
        if (mongoose.connection.readyState === 0) {
            await mongoose.connect(process.env.MONGO_DB_URL);
            console.log("Mongo Database Connected Successfully.");
        }
    } catch (error) {
        console.log(error);
    }
};

export default connectDB;