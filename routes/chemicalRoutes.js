import express from "express";
import {
  createChemical,
  getChemicals,
} from "../controllers/chemicalController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, createChemical);
router.get("/", authMiddleware, getChemicals);

export default router;
