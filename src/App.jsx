import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout";
import Rules from "./pages/Rules";
import Guidelines from "./pages/Guidelines";
import Creation from "./pages/Creation";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="rules" element={<Rules />} />
            <Route path="guidelines" element={<Guidelines />} />
            <Route path="creation" element={<Creation />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
