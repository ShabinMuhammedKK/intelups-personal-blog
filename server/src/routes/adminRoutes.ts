import express from "express";
import { registerAdmin, login } from "../controllers/adminControllers";
import { addArticle, deleteArticle } from "../controllers/articleControllers";

const router = express.Router();

router.post("/register", registerAdmin);
router.post("/login", login);
router.post("/article/upload", addArticle);
router.delete("/article/delete/:id", deleteArticle);

export default router;
