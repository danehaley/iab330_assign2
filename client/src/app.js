// Packages
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Sitewide Components
import Header from "./components/header";

// Routes
import PatientList from "./routes/patientsList";
import Maintenance from "./routes/maintenance";
import { Component } from "react";

let baseURL;
if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3001";
} else {
  baseURL = "http://ec2-3-227-215-23.compute-1.amazonaws.com:3001";
}
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Maintenance serverURL={baseURL} />} />
          <Route
            path="/patients"
            element={<PatientList serverURL={baseURL} />}
          />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
