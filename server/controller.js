import { dbModel } from "./model.js"

export const addData = async(req, res) => {
    try {
        const data = req.body
        const newData = await dbModel.create(data)
        return res.status(201).json({message:"created "})
    } catch (error) {
        return res.status(500).json({message: "db connection fail", error})
    }
}


export const allData = async(req, res) => {
    try {
        const newData = await dbModel.find()
        return res.status(201).json({message:"all student", data:newData})
    } catch (error) {
        return res.status(500).json({message: "db connection fail", error})
    }
}