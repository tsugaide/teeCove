import { Trash } from "lucide-react";
import DropFile from "../../DropFile";
import { useToPdfStore } from "../../../../store/imageToPdfStore";

const DropFileToPdf = () => {
  const { files, appendFiles, removeFiles } = useToPdfStore();

  const handleFileSelect = (newFiles: File[]) => {
    newFiles.forEach((file) => {
      appendFiles(file);
    });
  };

  return (
    <DropFile file={files} onFileSelect={handleFileSelect}>
      <div className="w-full h-full overflow-auto">
        {files.map((f, i) => (
          <div key={i} className="flex justify-center w-full h-full p-7">
            {i}
            <div className="flex flex-col justify-center items-center py-1">
              <img
                src={URL.createObjectURL(f)}
                alt=""
                className="object-contain w-auto max-h-full rounded-md"
              />
              <div className="mt-2 flex-1">
                <p className="text-xs font-montserrat text-center truncate w-40">
                  {f.name}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Trash
                className="w-4 h-4 cursor-pointer"
                onClick={() => removeFiles(i)}
              />
            </div>
          </div>
        ))}
      </div>
    </DropFile>
  );
};

export default DropFileToPdf;
