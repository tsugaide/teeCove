import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Image from "./pages/Image";
import ImageConvert from "./components/tools/images/ImageConvert";
import ImageResize from "./components/tools/images/ImageResize";
import ImageToPdf from "./components/tools/images/ImageToPdf";
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
        </Route>
      </Routes>
    </>
  );
}

export default App;
