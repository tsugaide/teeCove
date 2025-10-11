import { Image, FileText, Archive, Video, Mic } from "lucide-react";
import { Link } from "react-router-dom";

type ToolCardProps = {
  type: string;
  title: string;
  description: string;
  color: string;
  tags: string[];
};
const icons: Record<string, React.ReactNode> = {
  image: <Image size={22} />,
  document: <FileText size={22} />,
  archive: <Archive size={22} />,
  video: <Video size={22} />,
  audio: <Mic size={22} />,
};

const toolCard = ({ type, title, description, tags, color }: ToolCardProps) => {
  return (
    <Link
      className="w-full border border-black md:rounded-2xl rounded-lg p-4 bg-white"
      to={`/${title}`}
    >
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2 font-bold text-lg">
          {icons[type]}
          <h3 className="font-aclonica text-sm md:text-base">{title}</h3>
        </div>
        <p className="text-[8px] md:text-sm font-montserrat text-gray-700">
          {description}
        </p>

        <div className="flex flex-wrap md:gap-2 gap-1 mt-1 md:mt-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className={`md:px-2 md:py-1 px-1 rounded-full md:text-xs text-[6px] text-montserrat text-black ${color}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default toolCard;
