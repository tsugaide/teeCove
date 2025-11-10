import { Download } from "lucide-react";

type ToPdfFile = {
  filename: string;
  base64: string;
  mimetype: string;
};

type FileList = {
  files: ToPdfFile;
};

const DownloadFileToPdf = ({ files }: FileList) => {
  return (
    <div className="h-48 relative bg-[#E3E3E3] rounded-lg mt-5 mx-auto flex justify-center items-center">
      <div className="w-full h-full flex flex-col gap-4 justify-start py-3 px-5">
        <div className="flex gap-2 items-end">
          <div className="w-full h-fit flex flex-col bg-[#90CAF9] px-2 py-1 rounded-sm items-start justify-start">
            <p className="w-52 text-xs truncate font-montserrat">
              {files.filename}
            </p>
          </div>
          <div>
            <a
              href={`data:${files.mimetype};base64,${files.base64}`}
              download={files.filename}
            >
              <Download className="w-5 h-5 bg-[#78acd6] p-1 rounded-full" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadFileToPdf;
