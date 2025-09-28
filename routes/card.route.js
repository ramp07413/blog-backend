import { Router } from "express";
import { createcard, deletecard, getcard, updatecard } from "../controllers/card.controller.js";

const router = Router()

router.get("/", getcard)
router.post("/", createcard)
router.put("/:id", updatecard)
router.delete("/:id", deletecard)

export {router as cardRouter}