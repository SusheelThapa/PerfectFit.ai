import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import TailorYourFitPage from "../pages/TailorYourFitPage";
import About from "../pages/About";
import ContactUs from "../pages/ContactUs";
import FAQ from "../pages/FAQ";
import HowItWorks from "../pages/HowItWorks";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/tailor-your-fit" element={<TailorYourFitPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
