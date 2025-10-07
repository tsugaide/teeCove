import ChooseTools from "../components/tools/ChooseTools";
import DropFile from "../components/tools/DropFile";

const image = () => {
  return (
    <div>
      <ChooseTools toolTitle="Images" tools={["Convert", "Compress"]} />
      <DropFile />
    </div>
  );
};

export default image;
