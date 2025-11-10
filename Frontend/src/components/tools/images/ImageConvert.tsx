import DropFileConvert from "./convert/DropFileConvert";
import ChooseFileConvert from "./convert/ChooseFileConvert";
import ButtonConvert from "./convert/ButtonConvert";
import DownloadFile from "./convert/DownloadFile";
import { useState } from "react";

const ImageConvert = () => {
  type ConvertedFile = {
    filename: string;
    base64: string;
    mimetype: string;
    size: number;
  };

  type ConvertResponse = {
    message: string;
    path: ConvertedFile[];
  };

  const [files, setFile] = useState<File[]>([]);
  const [formatSelected, setFormatSelected] = useState("");
  const [isCompress, setIsCompress] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [results, setResult] = useState<ConvertResponse | null>(null);

  const formData = new FormData();
  const formats = ["PNG", "JPG", "TIFF", "WEBP", "AVIF", "HEIF", "RAW"];

  const handleFileSelect = (newFiles: File[]) => {
    setFile((prev) => [...prev, ...newFiles]);
  };

  const handleFileRemove = (index: number) => {
    setFile((prev) => prev.filter((_, i) => i !== index));
  };

  const handleConvert = async () => {
    setLoading(true);
    files.forEach((file) => formData.append("images", file));
    formData.append("format", formatSelected.toLowerCase());
    formData.append("isCompressed", String(isCompress));

    const res = await fetch(`${import.meta.env.VITE_API_URL}/image/convert`, {
      method: "POST",
      body: formData,
    });

    const data: ConvertResponse = await res.json();
    setResult(data);
    setLoading(false);
  };
  return (
    <div>
      {results ? (
        <DownloadFile files={results.path} />
      ) : (
        <div>
          <DropFileConvert
            onFileSelect={handleFileSelect}
            fileRemove={handleFileRemove}
            file={files}
          />
          {files.length > 0 && (
            <div>
              <ChooseFileConvert
                formats={formats}
                selected={formatSelected}
                setSelected={setFormatSelected}
                compressed={setIsCompress}
              />
              <ButtonConvert
                onConvert={handleConvert}
                file={files}
                isLoading={isLoading}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageConvert;
