import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Image from "./pages/Image";
import ImageConvert from "./components/tools/images/ImageConvert";
import ImageResize from "./components/tools/images/ImageResize";
import ImageToPdf from "./components/tools/images/ImageToPdf";
import ImageScan from "./components/tools/images/ImageScan";
import Document from "./pages/Document";
import DocumentMerger from "./components/tools/documents/DocumentMerger";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/image" element={<Image />}>
          <Route path="convert and compress" element={<ImageConvert />} />
          <Route path="resize" element={<ImageResize />} />
          <Route path="to pdf" element={<ImageToPdf />} />
          <Route path="scan text" element={<ImageScan />} />
        </Route>
        <Route path="/document" element={<Document />}>
          <Route path="merger pdf" element={<DocumentMerger />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
