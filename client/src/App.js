import Home from "./pages/Home";
import Crumbs from "./pages/Crumbs";
import Creations from "./pages/Creations";
import Me from "./pages/Me";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import NeckPieces from "./pages/NeckPieces";
import Lapel from "./pages/Lapel";
import Essentials from "./pages/Essentials";
import LargePieces from "./pages/LargePieces";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar children={<Home />} />} />
        <Route path="/crumbs" element={<NavBar children={<Crumbs />} />} />
        <Route
          path="/creations"
          element={<NavBar children={<Creations />} />}
        />
        <Route
          path="/creations/neckpieces"
          element={<NavBar children={<NeckPieces />} />}
        />
        <Route
          path="/creations/lapel"
          element={<NavBar children={<Lapel />} />}
        />
        <Route
          path="/creations/essentials"
          element={<NavBar children={<Essentials />} />}
        />
        <Route
          path="/creations/largepieces"
          element={<NavBar children={<LargePieces />} />}
        />
        <Route path="/me" element={<NavBar children={<Me />} />} />
        <Route path="/contact" element={<NavBar children={<Contact />} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
