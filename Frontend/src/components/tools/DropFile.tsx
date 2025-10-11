import { FileImage, BadgePlus } from "lucide-react";

const DropFile = ({
  onFileSelect,
  file,
}: {
  onFileSelect: (file: File[]) => void;
  file: File[];
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onFileSelect([...e.target.files]);
    }
  };

  return (
    <div className="w-[345px] h-36 relative bg-[#E3E3E3] rounded-lg mt-5 mx-auto flex justify-center items-center">
      {file.length != 0 ? (
        <>
          <div className="w-full h-full flex gap-4 justify-start p-3">
            {file.map((f, i) => (
              <div
                key={i}
                className="w-20 h-fit flex bg-[#90CAF9] px-2 py-1 rounded-sm justify-center"
              >
                <a className="block text-[9px] truncate font-montserrat">
                  {f.name.slice(0, -4)}
                </a>
                <a className="text-[9px] font-montserrat">{f.name.slice(-4)}</a>
              </div>
            ))}
          </div>
          <div className="absolute bottom-3 right-5 flex items-center gap-1 bg-black px-2 rounded-sm">
            <BadgePlus fill="#ffff" className="w-5" />
            <p className="text-[8px] font-aclonica text-white">Add more file</p>
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
