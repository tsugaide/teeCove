import { Download } from "lucide-react";

type ConvertedFile = {
  filename: string;
  base64: string;
  mimetype: string;
  size: number;
};

type FileList = {
  files: ConvertedFile[];
};

const DownloadFile = ({ files }: FileList) => {
  return (
    <div className="h-48 relative bg-[#E3E3E3] rounded-lg mt-5 mx-auto flex justify-center items-center">
      <div className="w-full h-full flex flex-col gap-4 justify-start py-3 px-5">
        {files.map((f, i) => (
          <div key={i} className="flex gap-2 items-end">
            <div className="w-full h-fit flex flex-col bg-[#90CAF9] px-2 py-1 rounded-sm items-start justify-start">
              <p className="w-52 text-xs truncate font-montserrat">
                {f.filename.slice(0, -4)}
              </p>
              <div className="flex gap-2 items-end mt-1">
                <p className="text-[9px] font-montserrat text-[#0e66ad] bg-[#85bdebc7] inline-block px-1.5 py-0.5 rounded-full">
                  {f.filename.slice(-4)}
                </p>
                <p className="text-[9px] font-montserrat text-[#5e809c]">
                  {f.size} kb
                </p>
              </div>
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

export default DownloadFile;
