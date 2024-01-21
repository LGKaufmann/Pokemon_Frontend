import { Route, Routes, useLocation } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import Create from "./Components/Create/Create";
import Detail from "./Components/Detail/Detail";
import About from "./Components/About/About";

function App() {
  const { pathname } = useLocation();
  return (
    <div>
      {pathname !== "/" && <NavBar />}
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
