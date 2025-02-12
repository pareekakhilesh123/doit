
import './App.css';
import React  from 'react';
import Dashboard from './Page/Dashboard';
import Important from './Page/Important';
import All_tasks from './Page/All_tasks';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
 

function App() {
   
  return (

<Router>
 
     

 
  <div style={{ flex: 1, padding: "20px" }}>
  
    <Routes>
      <Route path="/" element={<Dashboard />} /> 
      <Route path="/star" element={<Important />} /> 
      <Route path="/task" element={<All_tasks />} /> 
    </Routes>
  </div>

</Router>
  );
}

export default App;
