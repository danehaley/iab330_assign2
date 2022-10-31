// Packages
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Sitewide Components
import Header from "./components/header";

// Routes
import PatientList from "./routes/patientsList";
import Maintenance from "./routes/maintenance";
import { Component } from "react";

let baseURL;
if(process.env.NODE_ENV === 'development'){
  baseURL = 'http://localhost';

}else
{
  baseURL = 'http://ec2-3-227-215-23.compute-1.amazonaws.com'; 
}

api_url_location ='';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {apiResponse:""};
  }

  callLocationsAPI(){
    api_url_location = baseURL+':3001/apidata';
    fetch(api_url_location)
      .then((response) => response.json())
      .then((data) => console.log('api data', data));
  }

  componentDidMount() {
    this.callLocationsAPI();
  }

  render() {
    return(
      <h1>Application running in <b>{process.env.NODE_ENV}</b> mode.</h1>
    )
  }
}

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
