import sharp from "sharp";
import { PDFDocument, PageSizes } from "pdf-lib";
import { createWorker } from "tesseract.js";

export const imageConvert = async (req, res) => {
  const format = req.body.format;
  const isCompressed = req.body.isCompressed == "true";
  try {
    const convertedFiles = await Promise.all(
      req.files["images"].map(async (file) => {
        const metadata = await sharp(file.buffer).metadata();
        const buffer = await sharp(file.buffer)
          .toFormat(format ? format : metadata.format, {
            quality: isCompressed ? 40 : 100,
            mozjpeg: isCompressed,
            chromaSubsampling: isCompressed ? "4:2:0" : "4:4:4",
            compressionLevel: isCompressed ? 0 : 9,
          })
          .toBuffer();
        return {
          filename: file.originalname.replace(
            /.[^/.]+$/,
            `(teecove).${format ? format : metadata.format}`
          ),
          base64: buffer.toString("base64"),
          mimetype: `image/${format ? format : metadata.format}`,
          size: (buffer.length / 1024).toFixed(1),
        };
      })
    );
    res.json({ message: "converted", path: convertedFiles });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const imageResize = async (req, res) => {
  try {
    const width = Array.isArray(req.body.width)
      ? req.body.width
      : [req.body.width];
    const height = Array.isArray(req.body.height)
      ? req.body.height
      : [req.body.height];
    const resizedFiles = await Promise.all(
      req.files["images"].map(async (file, index) => {
        const metadata = await sharp(file.buffer).metadata();
        const buffer = await sharp(file.buffer)
          .resize({
            width: Number(width[index]),
            height: Number(height[index]),
          })
          .toBuffer();
        return {
          filename: file.originalname.replace(/.[^/.]+$/, "(teecove)"),
          base64: buffer.toString("base64"),
          mimetype: `image/${metadata.format}`,
          width: width[index],
          height: height[index],
        };
      })
    );
    res.json({ message: "resized", path: resizedFiles });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const imageToPdf = async (req, res) => {
  try {
    const pdfDoc = await PDFDocument.create();

    for (const file of req.files["images"]) {
      const buffer = file.buffer;
      const mimetype = file.mimetype;
      const image =
        mimetype == "image/png"
          ? await pdfDoc.embedPng(buffer)
          : await pdfDoc.embedJpg(buffer);

      const { width, height } = image.scale(1);
      const margin = req.margin == "none" ? 0 : req.margin == "small" ? 10 : 70;
      const size =
        req.pageSize === "A4"
          ? req.orientation === "portrait"
            ? PageSizes.A4
            : PageSizes.A4_LANDSCAPE
          : [width, height];

      const page = pdfDoc.addPage(size);

      const pageWidth = page.getWidth();
      const pageHeight = page.getHeight();

      const scale = Math.min(pageWidth / width, pageHeight / height);
      const scaledWidth = width * scale - margin * 2;
      const scaledHeight = height * scale - margin * 2;

      page.drawImage(image, {
        x: (page.getWidth() - scaledWidth) / 2,
        y: (page.getHeight() - scaledHeight) / 2,
        width: scaledWidth,
        height: scaledHeight,
      });
    }
    const pdfBytes = await pdfDoc.save();
    const pdfBuffer = Buffer.from(pdfBytes).toString("base64");
    res.json({
      message: "converted to pdf",
      path: {
        filename: "your pdf (teecove).pdf",
        base64: pdfBuffer,
        mimetype: "application/pdf",
      },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const scanText = async (req, res) => {
  try {
    const worker = await createWorker(["ind", "eng"]);

    const { buffer } = req.files["images"][0];
    const ret = await worker.recognize(buffer);
    await worker.terminate();

    res.json({ text: ret.data.text, confidence: ret.data.confidence });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
