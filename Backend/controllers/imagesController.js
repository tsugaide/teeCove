import sharp from "sharp";
import fs from "fs";

export const imageConvert = async (req, res) => {
  const format = req.body.format;
  try {
    const convertedFiles = await Promise.all(
      req.files["images"].map(async (file) => {
        const buffer = await sharp(file.buffer).toFormat(format).toBuffer();
        return {
          filename: file.originalname.replace(
            /.[^/.]+$/,
            `(teecove).${format}`
          ),
          base64: buffer.toString("base64"),
          mimetype: `image/${format}`,
        };
      })
    );
    res.json({ message: "converted", path: convertedFiles });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
