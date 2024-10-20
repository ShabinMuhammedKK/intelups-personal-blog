import express from "express";
import { getAllArticles } from "../controllers/articleControllers";

const router = express.Router();

router.get("/articles", getAllArticles);
export default router;
