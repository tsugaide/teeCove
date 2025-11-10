import { Router } from "express";
import { imageConvert } from "../controllers/imagesController.js";
import { imageResize } from "../controllers/imagesController.js";
import { imageToPdf } from "../controllers/imagesController.js";
import { uploadFile } from "../middlewares/uploadFile.js";

const router = Router();

router.post("/convert", uploadFile, imageConvert);
router.post("/resize", uploadFile, imageResize);
router.post("/topdf", uploadFile, imageToPdf);

export default router;
