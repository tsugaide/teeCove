import DropFile from "../../DropFile";
import { X } from "lucide-react";

type files = {
  file: File[];
  fileRemove: (index: number) => void;
  onFileSelect: (file: File[]) => void;
};

const DropFileConvert = ({ file, fileRemove, onFileSelect }: files) => {
  return (
    <DropFile onFileSelect={onFileSelect} file={file}>
      <div className="w-full h-full flex flex-col gap-4 justify-start py-3 px-5 overflow-y-auto">
        {file.map((f, i) => (
          <div key={i} className="flex gap-2 items-end">
            <div className="w-full h-fit flex flex-col bg-[#90CAF9] px-2 py-1 rounded-sm items-start justify-start">
              <p className="w-50 text-xs truncate font-montserrat">
                {f.name.slice(0, -4)}
              </p>
              <div className="flex gap-2 items-end mt-1">
                <p className="text-[9px] font-montserrat text-[#0e66ad] bg-[#85bdebc7] inline-block px-1.5 py-0.5 rounded-full">
                  {f.name.slice(-4)}
                </p>
                <p className="text-[9px] font-montserrat text-[#5e809c]">
                  {(f.size / 1024).toFixed(1)} kb
                </p>
              </div>
            </div>
            <div>
              <X
                onClick={() => fileRemove(i)}
                className="w-5 h-5 bg-[#53535342] rounded-full p-1"
              />
            </div>
          </div>
        ))}
      </div>
    </DropFile>
  );
};

export default DropFileConvert;
