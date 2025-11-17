import { useLocation } from "react-router-dom";

type chooses = {
  toolTitle: string;
  tools: string[];
};

const ChooseTools = ({ toolTitle, tools }: chooses) => {
  const location = useLocation();
  return (
    <div className="mt-12">
      <h1 className="font-aclonica text-3xl">{toolTitle}</h1>
      <p className="font-montserrat text-sm font-semibold w-44 mt-14">
        Choose tool what you need
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        {tools.map((tool, i) => (
          <a
            href={`/${toolTitle}/${tool.toLowerCase()}`}
            key={i}
            className={`font-montserrat text-[10px] px-2 py-[1px] rounded-full border border-black transition-colors duration-200
        ${
          decodeURIComponent(location.pathname) ===
          `/${toolTitle}/${tool.toLowerCase()}`
            ? "bg-black text-white"
            : "bg-transparent text-black hover:bg-black hover:text-white"
        }
      `}
          >
            {tool}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ChooseTools;
