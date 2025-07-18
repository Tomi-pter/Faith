import { Route, Routes, useLocation } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Work from "./components/Work";
import Artefix from "./pages/Work/Artefix";
import Pyramid from "./pages/Work/Pyramid";
import Awenix from "./pages/Work/Awenix";
import DTC from "./pages/Work/DTC";
import Hadupad from "./pages/Playground/Hadupad";
import DS from "./pages/Playground/DS";
// import dottedBg from "./assets/work_dotted_bg.png";
import Playground from "./pages/Playground";
import Live from "./pages/Live";

function App() {
  const location = useLocation();
  const isWorkSubRoute = location.pathname.startsWith("/work/");
  const isDTCSubRoute = location.pathname.includes("/dtc");
  const isHadupadSubRoute = location.pathname.includes("/hadupad");
  const isDSSubRoute = location.pathname.includes("/ds");

  const body = document.getElementsByTagName("body")[0];

  if (isWorkSubRoute && !isDTCSubRoute) {
    body.style.backgroundColor = "#ECF0F5";
    // body.style.backgroundImage = `url(${dottedBg})`;
  } else if (isHadupadSubRoute) {
    body.style.backgroundColor = "black";
  } else if (isDSSubRoute) {
    body.style.backgroundColor = "#061833";
  } else {
    body.style.backgroundColor = "white";
  }

  return (
    <div className="inter-regular min-h-screen md:p-8">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/artefix" element={<Artefix />} />
        <Route path="/work/pyramid" element={<Pyramid />} />
        <Route path="/work/awenix" element={<Awenix />} />
        <Route path="/work/dtc" element={<DTC />} />
        <Route path="/live" element={<Live />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/playground/hadupad" element={<Hadupad />} />
        <Route path="/playground/ds" element={<DS />} />
      </Routes>
    </div>
  );
}

export default App;
