import ChooseTools from "../components/tools/ChooseTools";
import { Outlet } from "react-router-dom";

const Image = () => {
  return (
    <div>
      <ChooseTools toolTitle="Images" tools={["Convert", "Compress"]} />;
      <Outlet />
    </div>
  );
};

export default Image;
