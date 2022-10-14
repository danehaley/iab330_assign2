// Packages
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Sitewide Components
import Header from "./components/header";

// Routes
import Home from "../src/routes/home";
import PatientList from "../src/routes/patientsList";
import PatientInfo from "../src/routes/patientsInfo";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patients" element={<PatientList />} />
        <Route path="/patientinfo/:id" element={<PatientInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
