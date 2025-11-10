import { FileImage, BadgePlus } from "lucide-react";

const DropFile = ({
  onFileSelect,
  file,
  children,
}: {
  onFileSelect: (file: File[]) => void;
  file: File[];
  children: React.ReactNode;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onFileSelect([...e.target.files]);
    }
  };

  return (
    <div className="h-56 relative bg-[#E3E3E3] rounded-lg mt-5 flex justify-center items-center">
      {file.length != 0 ? (
        <>
          {children}
          <div className="absolute -bottom-7 right-5 flex items-center gap-1 bg-black px-1 rounded-sm">
            <BadgePlus fill="#ffff" className="w-4" />
            <label
              htmlFor="input"
              className="text-[6px] font-aclonica text-white"
            >
              Add more file
            </label>
            <input
              type="file"
              multiple
              onChange={handleChange}
              id="input"
              className="hidden"
            />
          </div>
        </>
      ) : (
        <div className="w-24 h-fit rounded-sm bg-[#90CAF9] text-center leading-2 py-3 relative">
          <FileImage className="absolute -top-4 left-1/2 -translate-x-1/2" />
          <label htmlFor="input" className="font-aclonica text-[10px]">
            Add Your File Here
          </label>
          <input
            type="file"
            multiple
            onChange={handleChange}
            id="input"
            className="hidden"
          />
        </div>
      )}
    </div>
  );
};

export default DropFile;
