import { PDFDocument } from "pdf-lib";

export const merger = async (req, res) => {
  try {
    const mergedPdf = await PDFDocument.create();

    for (const file of req.files["documents"]) {
      const { buffer } = file;
      const pdf = await PDFDocument.load(buffer);
      const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
      copiedPages.forEach((page) => {
        mergedPdf.addPage(page);
      });
    }

    const mergedPdfBytes = await mergedPdf.save();
    const mergedPdfBuffer = Buffer.from(mergedPdfBytes).toString("base64");
    res.json({
      message: "mergered",
      path: {
        filename: "your pdf (teecove).pdf",
        base64: mergedPdfBuffer,
        mimetype: "application/pdf",
      },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
