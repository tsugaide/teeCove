import { FileImage } from "lucide-react";

const dropFile = () => {
  return (
    <div className="w-[345px] h-36 bg-[#E3E3E3] rounded-lg mt-5 mx-auto flex justify-center items-center">
      <div className="w-24 h-fit rounded-sm bg-[#90CAF9] text-center leading-2 py-3 relative">
        <FileImage className="absolute -top-4 left-1/2 -translate-x-1/2" />
        <span className="font-aclonica text-[10px]">Add Your File Here</span>

        <input type="file" name="" id="" className="hidden" />
      </div>
    </div>
  );
};

export default dropFile;
