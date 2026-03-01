import express from "express"
import mongoose from "mongoose"
const app = express()
import {dbModel} from "./model.js"
import {dbConnect} from "./db.js"
import router from "./router.js"
import dotenv from "dotenv"
import cors from "cors"
dotenv.config()
app.use(cors())
app.use(express.json())
app.use("/api", router)
app.listen(process.env.PORT, () => {
    dbConnect()
    console.log("server started")
})