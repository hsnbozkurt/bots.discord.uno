import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Allbots from "./Allbots";
import Bot from "./Bot";
import Category from "./Category";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/allbots" element={<Allbots />} />
      <Route path="/bot/:id" element={<Bot />} />
      <Route path="/categories/:category" element={<Category />} />
      {/** Custom bot urls */}
      <Route path="/bannerfly" element={<Bot id="948114586031251456" />} />
      <Route path="/butterfly" element={<Bot id="724658095296479343" />} />
      <Route path="/deprem" element={<Bot id="1010946492544069724" />} />
      <Route path="/uno" element={<Bot id="1178269349325320192" />} />
      <Route path="/coplack" element={<Bot id="969239288589991966" />} />
      <Route path="/strange" element={<Bot id="974532293332971582" />} />
    </Routes> 
  );
}
