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
import ItemDisplay from "./pages/ItemDisplay";

import axios from "axios";
import { useState, useEffect, createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const UserContext = createContext({
  emailAddress: "",
  setUser: () => {},
});

const App = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get("/auth/getLoggedInUser");
      if (response) {
        setUser(response.data);
      }
    };
    getUser();
  }, []);

  const userObj = { emailAddress: user, setUser };

  return (
    <UserContext.Provider value={userObj}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<NavBar UserContext={UserContext} children={<Home />} />}
          />
          <Route
            path="/crumbs"
            element={<NavBar UserContext={UserContext} children={<Crumbs />} />}
          />
          <Route
            path="/creations"
            element={
              <NavBar UserContext={UserContext} children={<Creations />} />
            }
          />
          <Route
            path="/creations/neckpieces"
            element={
              <NavBar
                UserContext={UserContext}
                children={<NeckPieces UserContext={UserContext} />}
              />
            }
          />
          <Route
            path="/creations/lapel"
            element={
              <NavBar
                UserContext={UserContext}
                children={<Lapel UserContext={UserContext} />}
              />
            }
          />
          <Route
            path="/creations/essentials"
            element={
              <NavBar
                UserContext={UserContext}
                children={<Essentials UserContext={UserContext} />}
              />
            }
          />
          <Route
            path="/creations/largepieces"
            element={
              <NavBar
                UserContext={UserContext}
                children={<LargePieces UserContext={UserContext} />}
              />
            }
          />
          <Route
            path="/creations/display/:id"
            element={
              <NavBar UserContext={UserContext} children={<ItemDisplay />} />
            }
          />
          <Route
            path="/me"
            element={<NavBar UserContext={UserContext} children={<Me />} />}
          />
          <Route
            path="/contact"
            element={
              <NavBar UserContext={UserContext} children={<Contact />} />
            }
          />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default App;
