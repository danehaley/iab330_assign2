// Packages
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Sitewide Components
import Header from "./components/header";

// Routes
import PatientList from "./routes/patientsList";
import Maintenance from "./routes/maintenance";

let baseURL = "http://ec2-3-227-215-23.compute-1.amazonaws.com";

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost";
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Maintenance baseURL={baseURL} />} />
        <Route path="/patients" element={<PatientList baseURL={baseURL} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
