import mongoose from "mongoose";

const dataSchema = mongoose.Schema({
    name:{type:String},
    date:{type: Date, default: Date.now}
})

export const dbModel = mongoose.model("dbModel", dataSchema)