import { useState } from "react";
// import { useResizeStore } from "../../../../store/resizeStore";

type size = {
  width: React.Dispatch<React.SetStateAction<string>>;
  height: React.Dispatch<React.SetStateAction<string>>;
};
const ResizeManual = ({ width, height }: size) => {
  const [mode, setMode] = useState<"size" | "percentage">("size");
  const [percentage, setPercentage] = useState(100);
  const [unit, setUnit] = useState("px");
  const [output, setOutput] = useState("Original");

  return (
    <div className="space-y-8 text-neutral-100">
      {/* By size */}
      <div>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            checked={mode === "size"}
            onChange={() => setMode("size")}
            className="accent-[#90CAF9]"
          />
          <span className="font-montserrat">by size</span>
        </label>

        {mode === "size" && (
          <div className="mt-3 flex gap-2">
            <input
              type="number"
              placeholder="Width"
              onChange={(e) => width(e.target.value)}
              className="bg-neutral-800 px-3 py-2 rounded-md w-full outline-none"
            />
            <input
              type="number"
              placeholder="Height"
              onChange={(e) => height(e.target.value)}
              className="bg-neutral-800 px-3 py-2 rounded-md w-full outline-none"
            />
            <select
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              className="bg-neutral-800 px-2 py-2 rounded-md outline-none"
            >
              <option value="px">px</option>
              <option value="%">%</option>
            </select>
          </div>
        )}
      </div>

      {/* By percentage */}
      <div>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            checked={mode === "percentage"}
            onChange={() => setMode("percentage")}
            className="accent-[#90CAF9]"
          />
          <span className="font-montserrat">by percentage</span>
        </label>

        {mode === "percentage" && (
          <div className="mt-4">
            <input
              type="range"
              min="1"
              max="200"
              value={percentage}
              onChange={(e) => {
                setPercentage(Number(e.target.value));
              }}
              className="w-full accent-[#90CAF9]"
            />
            <div className="flex justify-between text-sm mt-2 text-neutral-400">
              <span>1080 x 1350 px</span>
              <span>{percentage}%</span>
            </div>
          </div>
        )}
      </div>

      {/* Output */}
      <div>
        <label className="block mb-2 font-montserrat">output</label>
        <select
          value={output}
          onChange={(e) => setOutput(e.target.value)}
          className="bg-neutral-800 px-3 py-2 rounded-md w-full outline-none"
        >
          <option>Original</option>
          <option>JPG</option>
          <option>PNG</option>
          <option>WEBP</option>
        </select>
      </div>
    </div>
  );
};

export default ResizeManual;
