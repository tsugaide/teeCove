import { Download } from "lucide-react";

type ConvertedFile = {
  filename: string;
  base64: string;
  mimetype: string;
};

type FileList = {
  files: ConvertedFile[];
};

const DownloadFile = ({ files }: FileList) => {
  return (
    <div className="w-[345px] h-36 relative bg-[#E3E3E3] rounded-lg mt-5 mx-auto flex justify-center items-center">
      <div className="w-full h-full flex gap-4 justify-start p-3">
        {files.map((f, i) => (
          <div
            key={i}
            className="w-24 h-fit flex bg-[#90CAF9] px-2 py-1 rounded-sm justify-center items-center"
          >
            <a className="block text-[9px] truncate font-montserrat">
              {f.filename.slice(0, -4)}
            </a>
            <a className="text-[9px] font-montserrat">{f.filename.slice(-4)}</a>
            <a
              href={`data:${f.mimetype};base64,${f.base64}`}
              download={f.filename}
            >
              <Download className="w-4 h-4 ml-1 bg-[#78acd6] p-0.5 rounded-full" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DownloadFile;
