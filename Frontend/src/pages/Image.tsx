import ChooseTools from "../components/tools/ChooseTools";
import { Outlet } from "react-router-dom";

const Image = () => {
  return (
    <div className="mx-8 relative pb-8">
      <ChooseTools
        toolTitle="Image"
        tools={["Convert and Compress", "Resize", "To Pdf", "Scan Text"]}
      />
      <Outlet />
    </div>
  );
};

export default Image;
