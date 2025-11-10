import { useState } from "react";
import ResizeManual from "./ResizeManual";
import ResizeSocialMedia from "./ResizeSociaMedia";
import { useResizeStore } from "../../../../store/resizeStore";

type props = {
  index: number;
};
const ResizeSetting = ({ index }: props) => {
  const { setIsSetting, updateFileSize } = useResizeStore();
  const [activeTab, setActiveTab] = useState<"manual" | "social">("manual");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");

  return (
    <div className="rounded-lg z-20 w-96 top-0 left-1/2 -translate-x-1/2 absolute bg-neutral-900 text-neutral-100 flex flex-col items-center justify-center p-8">
      {/* Tabs */}
      <div className="flex gap-4 mb-10">
        <button
          onClick={() => setActiveTab("manual")}
          className={`px-8 py-3 rounded-2xl font-montserrat font-semibold transition ${
            activeTab === "manual"
              ? "bg-neutral-100 text-black"
              : "bg-neutral-800 text-neutral-500"
          }`}
        >
          Manual
        </button>
        <button
          onClick={() => setActiveTab("social")}
          className={`px-8 py-3 rounded-2xl font-montserrat font-semibold transition ${
            activeTab === "social"
              ? "bg-neutral-100 text-black"
              : "bg-neutral-800 text-neutral-500"
          }`}
        >
          Social Media
        </button>
      </div>

      {/* Content */}
      <div className="w-full max-w-md">
        {activeTab === "manual" ? (
          <ResizeManual width={setWidth} height={setHeight} />
        ) : (
          <ResizeSocialMedia />
        )}
      </div>
      <div className="flex mt-8 ml-auto">
        <button
          onClick={() => {
            setIsSetting(false);
            updateFileSize(index, Number(width), Number(height));
          }}
          className="bg-neutral-800 text-white px-6 py-2 rounded-md hover:bg-neutral-700 transition"
        >
          {index}Save
        </button>
      </div>
    </div>
  );
};

export default ResizeSetting;
