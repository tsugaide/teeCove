import ChooseTools from "../components/tools/ChooseTools";
import { Outlet } from "react-router-dom";

const Document = () => {
  return (
    <div className="mx-8 relative pb-8">
      <ChooseTools toolTitle="Document" tools={["Merger Pdf"]} />
      <Outlet />
    </div>
  );
};

export default Document;
