import { Settings, Trash } from "lucide-react";
import DropFile from "../../DropFile";
import { useResizeStore } from "../../../../store/resizeStore";
import ResizeSetting from "./ResizeSetting";

const DropFileResize = () => {
  interface FileWithId {
    id: string;
    file: File;
  }
  const { files, appendFiles, isSetting, removeFiles, setIsSetting } =
    useResizeStore();

  const handleFileSelect = (newFiles: FileWithId[]) => {
    newFiles.forEach((file) => {
      const img = new Image();
      img.onload = () => {
        appendFiles(file.file, img.width, img.height);
      };
      img.src = URL.createObjectURL(file.file);
    });
  };

  return (
    <DropFile file={files.map((f) => f.file)} onFileSelect={handleFileSelect}>
      <div className="w-full h-full overflow-auto">
        {files.map((f, i) => (
          <div key={i} className="flex justify-center w-full h-full p-7">
            {i}
            <div className="flex flex-col justify-center items-center py-1">
              <img
                src={URL.createObjectURL(f.file)}
                alt=""
                className="object-contain w-auto max-h-full rounded-md"
              />
              <div className="mt-2 flex-1">
                <p className="text-xs font-montserrat text-center truncate w-40">
                  {f.file.name}
                </p>
                <div className="flex gap-2 items-center justify-center mt-1">
                  <p className="text-[9px] font-montserrat text-center">
                    {f.widthOri} x {f.heightOri} px
                  </p>
                  <p className="text-[8px] font-montserrat font-semibold">to</p>
                  <p className="text-[9px] font-montserrat text-center text-gray-700 bg-[#85bdebc7] px-1.5 rounded-full">
                    {f.widthResize} x {f.heightResize} px
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Trash
                className="w-4 h-4 cursor-pointer"
                onClick={() => removeFiles(i)}
              />
              <Settings
                className="w-4 h-4 cursor-pointer"
                onClick={() => setIsSetting(true)}
              />
              {isSetting && <ResizeSetting index={i} />}
            </div>
          </div>
        ))}
      </div>
    </DropFile>
  );
};

export default DropFileResize;
