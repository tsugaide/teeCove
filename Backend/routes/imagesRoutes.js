import { Router } from "express";
import { imageConvert } from "../controllers/imagesController.js";
import { uploadFile } from "../middlewares/uploadFile.js";

const router = Router();

router.post("/convert", uploadFile, imageConvert);

export default router;
