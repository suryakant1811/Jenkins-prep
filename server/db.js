import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()
export const dbConnect =  async()=> {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("DB connection successfully")
    } catch (error) {
        console.log("DB connection fail", error)
    }
}
