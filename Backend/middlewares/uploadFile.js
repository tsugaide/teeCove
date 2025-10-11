import multer from "multer";

const upload = multer({ storage: multer.memoryStorage() });

export const uploadFile = upload.fields([
  { name: "images", maxCount: 6 },
  { name: "documents", maxCount: 6 },
]);
