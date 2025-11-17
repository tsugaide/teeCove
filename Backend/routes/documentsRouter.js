import { Router } from "express";
import { merger } from "../controllers/documentsController.js";
import { uploadFile } from "../middlewares/uploadFile.js";

const router = Router();

router.post("/mergerpdf", uploadFile, merger);

export default router;
