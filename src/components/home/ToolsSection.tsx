import ToolCard from "./ToolCard";

export default function ToolsSection() {
  const tools = [
    {
      type: "image",
      title: "Image",
      description: "Convert, resize, and optimize your images effortlessly.",
      color: "bg-[#90CAF9]",
      tags: [
        "JPG ↔ PNG ↔ GIF ↔ WEBP ↔ TIFF",
        "Resize",
        "Compress",
        "Scan Text",
      ],
    },
    {
      type: "document",
      title: "Document",
      description: "Transform your PDFs, DOCX, and other document formats.",
      color: "bg-[#ED3C50]",
      tags: ["PDF ↔ DOCX ↔ PPT", "Merge", "Split", "Protect"],
    },
    {
      type: "archive",
      title: "Archive",
      description: "Extract, create, or convert archive files in seconds.",
      color: "bg-[#FFB100]",
      tags: [
        "ZIP ↔ RAR ↔ 7z",
        "Split and Join Archive",
        "Secure",
        "Create/Pack Archive",
      ],
    },
    {
      type: "video",
      title: "Video",
      description: "Compress, convert, or change video formats easily.",
      color: "bg-[#A6A6A6]",
      tags: ["MP4 ↔ AVI ↔ MKV", "Extract Frame", "Compress"],
    },
    {
      type: "audio",
      title: "Audio",
      description: "Convert and compress audio with a single click.",
      color: "bg-[#78EE02]",
      tags: ["Voice to Text", "Text to Voice", "MP3 ↔ WAV ↔ AAC"],
    },
  ];

  return (
    <div className="flex justify-center mt-24 mx-8">
      <div className="flex flex-col items-start gap-8 ">
        <div className=" bg-black text-white md:rounded-2xl rounded-xl md:p-6 px-6 py-4 text-start md:w-[250px] w-36">
          <h1 className="font-aclonica md:text-2xl text-lg leading-tight">
            Your tools are here
          </h1>
          <div className="w-6 h-6 bg-white rounded-full ml-auto mt-1 "></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-full max-w-5xl">
          {tools.map((tool, index) => (
            <ToolCard key={index} {...tool} />
          ))}
        </div>
      </div>
    </div>
  );
}
