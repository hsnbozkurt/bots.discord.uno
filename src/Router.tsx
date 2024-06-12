import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Allbots from "./Allbots";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/allbots" element={<Allbots />} />
    </Routes>
  );
}
