import DropFile from "../DropFile";
import ChooseFileConvert from "../ChooseFileConvert";
import ButtonConvert from "../ButtonConvert";
import DownloadFile from "../DownloadFile";
import { useState } from "react";

const ImageConvert = () => {
  type ConvertedFile = {
    filename: string;
    base64: string;
    mimetype: string;
  };

  type ConvertResponse = {
    message: string;
    path: ConvertedFile[];
  };

  const [files, setFile] = useState<File[]>([]);
  const [selected, setSelected] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [results, setResult] = useState<ConvertResponse | null>(null);

  const formats = ["PNG", "JPG", "TIFF", "WEBP", "BIMP"];

  const handleConvert = async () => {
    setLoading(true);
    const formData = new FormData();
    files.forEach((file) => formData.append("images", file));
    formData.append("format", selected.toLowerCase());

    const res = await fetch("http://localhost:3000/image/convert", {
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
          <DropFile onFileSelect={setFile} file={files} />
          <ChooseFileConvert
            formats={formats}
            selected={selected}
            setSelected={setSelected}
          />
          <ButtonConvert
            onConvert={handleConvert}
            file={files}
            isLoading={isLoading}
          />
        </div>
      )}
    </div>
  );
};

export default ImageConvert;
