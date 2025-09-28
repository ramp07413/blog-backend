import { Router } from "express";
import { createletter, deleteletter, getletter, updateletter } from "../controllers/letter.controller.js";



const router = Router()

router.get("/", getletter)
router.post("/", createletter)
router.put("/:id", updateletter)
router.delete("/:id", deleteletter)

export {router as letterRouter}