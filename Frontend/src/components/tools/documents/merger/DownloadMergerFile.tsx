import { Download } from "lucide-react";
type MergerFile = {
  filename: string;
  base64: string;
  mimetype: string;
};

type FileList = {
  files: MergerFile;
};

const DownloadMergerFile = ({ files }: FileList) => {
  return (
    <div className="h-48 relative bg-[#E3E3E3] rounded-lg mt-5 mx-auto flex justify-center items-center">
      <div className="w-full h-full flex flex-col gap-4 justify-center items-center py-3 px-5">
        <div className="flex gap-2 items-center">
          <div className="w-40 h-10 flex bg-[#ED3C50] px-2 py-1 rounded-sm items-center justify-center">
            <p className="text-xs font-montserrat font-medium">
              Download Your Pdf
            </p>
          </div>
          <div>
            <a
              href={`data:${files.mimetype};base64,${files.base64}`}
              download={files.filename}
            >
              <Download className="w-6 h-6 bg-[#f85063] p-1 rounded-full" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadMergerFile;
