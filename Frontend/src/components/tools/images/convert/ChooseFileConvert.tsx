import { useState } from "react";
import { ChevronDown } from "lucide-react";

type CustomDropdownProps = {
  formats: string[];
  selected: string;
  compressed: React.Dispatch<React.SetStateAction<boolean>>;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
};
const ChooseFileConvert = ({
  formats,
  selected,
  setSelected,
  compressed,
}: CustomDropdownProps) => {
  const [open, setOpen] = useState(false);
  const [isCompressed, setCompressed] = useState(false);

  return (
    <div className="flex items-center justify-center gap-4 mt-14">
      <label className="text-lg font-aclonica font-medium">To</label>

      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="w-36 text-xs font-montserrat flex justify-between items-center rounded-md border bg-white px-3 py-1 hover:border-blue-400 transition"
        >
          {selected || "Not Convert"}
          <ChevronDown
            className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        {open && (
          <ul className="absolute text-xs top-full left-0 mt-1 w-36 max-h-40 bg-white border border-gray-200 rounded-xl shadow-md z-10 overflow-y-auto">
            {formats.map((format) => (
              <li
                key={format}
                onClick={() => {
                  setSelected(format);
                  setOpen(false);
                }}
                className={`px-3 py-2 cursor-pointer text-sm hover:bg-blue-50 hover:text-blue-600 transition ${
                  selected === format ? "bg-blue-100 text-blue-700" : ""
                }`}
              >
                {format}
              </li>
            ))}
          </ul>
        )}
      </div>
      <button
        onClick={() => {
          setCompressed(!isCompressed);
          compressed(isCompressed);
        }}
        className={
          !isCompressed
            ? "text-xs font-montserrat text-black border rounded-full px-2 py-0.5"
            : "text-xs font-montserrat text-white bg-black rounded-full px-2 py-0.5"
        }
      >
        {isCompressed ? "Compressed" : "Compress?"}
      </button>
    </div>
  );
};

export default ChooseFileConvert;
