import express from "express"
import { addData, allData} from "./controller.js"
const router = express.Router()

router.post("/add", addData)
router.get("/show", allData)


export default router