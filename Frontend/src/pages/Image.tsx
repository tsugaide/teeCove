import ChooseTools from "../components/tools/ChooseTools";
import { Outlet } from "react-router-dom";

const Image = () => {
  return (
    <div className="mx-8 py-5 relative">
      <ChooseTools
        toolTitle="Images"
        tools={["Convert and Compress", "Resize", "To Pdf"]}
      />
      <Outlet />
    </div>
  );
};

export default Image;
