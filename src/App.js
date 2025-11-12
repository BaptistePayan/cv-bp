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


  const widthPx = 1200;
const heightPx = 800;
const mmPerPx = 0.2646;
const pdfWidth = widthPx * mmPerPx;  // 317 mm
const pdfHeight = heightPx * mmPerPx; // 212 mm

const options = {
  filename: "cv.pdf",
  image: { type: "jpeg", quality: 1 },
  html2canvas: { scale: 2 },
  jsPDF: { unit: "mm", format: [pdfWidth, pdfHeight], orientation: "portrait" }
};

html2pdf().set(options).from(printRef.current).save();
  
return (
    <div className="App">
      <div className="grid_container" ref={printRef}>
        <div className="sidebar">
          <div className="actions">
            <DarkMode />
            <button data-html2canvas-ignore="true"  onClick={generatePDF}>PDF</button>
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


