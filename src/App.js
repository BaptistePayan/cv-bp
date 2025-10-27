import './App.css';
import React, { useRef } from "react";
import User from './components/User';
import Skills from './components/Skills';
import Profil from './components/Profil';
import FormationsExperiences from './components/FormationsExperiences';
import DarkMode from './components/DarkMode';
import html2pdf from 'html2pdf.js';

function App() {
  const printRef = useRef();
  const generatePDF = () => {
    html2pdf().from(printRef.current).save();
  };
  
return (
    <div className="App">
      <div className="grid_container" ref={printRef}>
        <div className="sidebar">
          <div className="actions">
            <DarkMode />
            <button onClick={generatePDF}>pdf</button>
          </div>
          <User />
          <Skills />
        </div>
        <div className="main">
          <Profil />
          <FormationsExperiences />
        </div>
      </div>
    </div>
  );
}

export default App;


