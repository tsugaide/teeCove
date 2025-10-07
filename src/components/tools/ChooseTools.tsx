type chooses = {
  toolTitle: string;
  tools: string[];
};

const chooseTools = ({ toolTitle, tools }: chooses) => {
  return (
    <div className="mx-8 mt-12">
      <h1 className="font-aclonica text-3xl">{toolTitle}</h1>
      <p className="font-montserrat text-sm font-semibold w-44 mt-14">
        Choose tool what you need
      </p>
      <div className="mt-5 flex gap-3">
        {tools.map((tool, i) => (
          <span
            key={i}
            className="font-montserrat text-[10px] px-2 py-[1px] rounded-full border border-black"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
};

export default chooseTools;
