// Packages
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Sitewide Components
import Header from "./components/header";

// Routes
import Home from "../src/routes/home";
import PatientList from "../src/routes/patientsList";
import PatientInfo from "../src/routes/patientsInfo";
import Maintenance from "../src/routes/maintenance";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patients" element={<PatientList />} />
        <Route path="/patientinfo/:id" element={<PatientInfo />} />
        <Route path="/maintenance" element={<Maintenance />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
