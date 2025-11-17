import { Trash } from "lucide-react";
import DropFile from "../../DropFile";
import { useScanTextStore } from "../../../../store/scanTextStore";

const DropFileToPdf = () => {
  interface FileWithId {
    id: string;
    file: File;
  }
  const { files, appendFiles, removeFiles } = useScanTextStore();

  const handleFileSelect = (newFiles: FileWithId[]) => {
    newFiles.forEach((file) => {
      appendFiles(file.file);
    });
  };

  return (
    <DropFile file={files} onFileSelect={handleFileSelect}>
      <div className="w-full h-full overflow-auto flex gap-4">
        {files.map((f, i) => (
          <div key={i} className="flex justify-center w-full h-full p-7">
            <div className="flex flex-col justify-center items-center py-1">
              <img
                src={URL.createObjectURL(f)}
                alt=""
                className="object-contain w-auto max-h-full rounded-md"
              />
            </div>
            <div className="flex gap-2">
              <Trash
                className="w-4 h-4 cursor-pointer"
                onClick={() => removeFiles()}
              />
            </div>
          </div>
        ))}
      </div>
    </DropFile>
  );
};

export default DropFileToPdf;
