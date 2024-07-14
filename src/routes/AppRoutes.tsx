import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import TailorYourFitPage from "../pages/TailorYourFitPage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/tailor-your-fit" element={<TailorYourFitPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
