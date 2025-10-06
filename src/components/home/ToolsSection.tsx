import ToolCard from "./ToolCard";

export default function ToolsSection() {
  const tools: {
    type: "image" | "document" | "archive" | "video" | "audio";
    title: string;
    description: string;
    tags: { label: string; color: string }[];
  }[] = [
    {
      type: "image",
      title: "Image",
      description: "Convert, resize, and optimize your images effortlessly.",
      tags: [
        { label: "JPG ↔ PNG ↔ GIF ↔ WEBP ↔ TIFF", color: "bg-blue-200" },
        { label: "Resize", color: "bg-blue-300" },
        { label: "Compress", color: "bg-blue-300" },
        { label: "Scan text", color: "bg-blue-300" },
      ],
    },
    {
      type: "document",
      title: "Document",
      description: "Ubah format & kompres gambar mudah.",
      tags: [
        { label: "Merge", color: "bg-red-200" },
        { label: "Compress", color: "bg-red-200" },
        { label: "Protect", color: "bg-red-200" },
        { label: "PDF ↔ Word ↔ Excel ↔ PPT", color: "bg-red-300" },
      ],
    },
    {
      type: "archive",
      title: "Archive",
      description: "Extract, create, or convert archive files in seconds.",
      tags: [
        { label: "ZIP ↔ RAR ↔ 7z", color: "bg-yellow-200" },
        { label: "Split and Join", color: "bg-yellow-200" },
        { label: "Secure", color: "bg-yellow-300" },
        { label: "Create/Pack Archive", color: "bg-yellow-300" },
      ],
    },
    {
      type: "video",
      title: "Video",
      description: "Edit and convert videos quickly without heavy software.",
      tags: [
        { label: "Extract frame", color: "bg-gray-200" },
        { label: "MP4 ↔ AVI ↔ MKV", color: "bg-gray-200" },
        { label: "Compress", color: "bg-gray-300" },
      ],
    },
    {
      type: "audio",
      title: "Audio",
      description: "Transform and clean up your audio files with ease.",
      tags: [
        { label: "Voice to text", color: "bg-green-200" },
        { label: "Text to audio", color: "bg-green-200" },
        { label: "Compress", color: "bg-green-300" },
        { label: "MP3 ↔ WAV ↔ AAC", color: "bg-green-300" },
      ],
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
