import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Image from "./pages/Image";
import ImageConvert from "./components/tools/images/ImageConvert";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/image" element={<Image />}>
          <Route path="convert" element={<ImageConvert />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
