import { HashRouter, Routes, Route } from "react-router-dom";
import KiruTech from "./components/KIRUMAIN";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<KiruTech />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
