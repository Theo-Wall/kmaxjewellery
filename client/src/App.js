import Home from "./pages/Home";
import Crumbs from "./pages/Crumbs";
import Creations from "./pages/Creations";
import Me from "./pages/Me";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
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
        <Route path="/me" element={<NavBar children={<Me />} />} />
        <Route path="/contact" element={<NavBar children={<Contact />} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
