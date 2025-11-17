import multer from "multer";

const upload = multer({ storage: multer.memoryStorage() });

export const uploadFile = upload.fields([
  { name: "images", maxCount: 10 },
  { name: "documents", maxCount: 10 },
]);
