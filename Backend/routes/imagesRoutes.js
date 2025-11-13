import { Router } from "express";
import {
  imageConvert,
  imageResize,
  imageToPdf,
  scanText,
} from "../controllers/imagesController.js";
import { uploadFile } from "../middlewares/uploadFile.js";

const router = Router();

router.post("/convert", uploadFile, imageConvert);
router.post("/resize", uploadFile, imageResize);
router.post("/topdf", uploadFile, imageToPdf);
router.post("/scan", uploadFile, scanText);

export default router;
