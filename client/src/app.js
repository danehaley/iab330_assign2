// Packages
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Sitewide Components
import Header from "./components/header";

// Routes
import PatientList from "./routes/patientsList";
import Maintenance from "./routes/maintenance";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Maintenance />} />
        <Route path="/patients" element={<PatientList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
