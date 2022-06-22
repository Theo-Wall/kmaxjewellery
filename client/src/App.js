import Home from "./pages/home/Home";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar children={<Home />} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
