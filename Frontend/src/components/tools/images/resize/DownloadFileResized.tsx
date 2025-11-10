import { Download } from "lucide-react";

type ResizedFile = {
  filename: string;
  base64: string;
  mimetype: string;
  width: number;
  height: number;
};

type FileList = {
  files: ResizedFile[];
};

const DownloadFileResized = ({ files }: FileList) => {
  return (
    <div className="h-48 relative bg-[#E3E3E3] rounded-lg mt-5 mx-auto flex justify-center items-center">
      <div className="w-full h-full flex flex-col gap-4 justify-start py-3 px-5">
        {files.map((f, i) => (
          <div key={i} className="flex gap-2 items-end">
            <div className="w-full h-fit flex flex-col bg-[#90CAF9] px-2 py-1 rounded-sm items-start justify-start">
              <p className="w-52 text-xs truncate font-montserrat">
                {f.filename}
              </p>
              <p className="text-[8px] font-montserrat mt-1 bg-[#78acd6] px-1 rounded-full">
                {f.width} x {f.height} px
              </p>
            </div>
            <div>
              <a
                href={`data:${f.mimetype};base64,${f.base64}`}
                download={f.filename}
              >
                <Download className="w-5 h-5 bg-[#78acd6] p-1 rounded-full" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DownloadFileResized;
