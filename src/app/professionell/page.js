'use client'
import React, { useState, useEffect } from 'react';

const Professionell = () => {
  const [formData, setFormData] = useState({
    title: '',
    population: '',
    age_range: '',
    condition: '',
    treatment: '',
    outcome: '',
    recommendation: '',
    tags: '',
    source: '',
  });
  const [pdfList, setPdfList] = useState([]);
  const [selectedPdfs, setSelectedPdfs] = useState([]);
  const [jsonOutput, setJsonOutput] = useState('');

  useEffect(() => {
    const fetchPdfs = async () => {
      try {
        const response = await fetch('https://bs-hack-geschlechter-ki-assistant.vercel.app/api/pdf');
        if (!response.ok) {
          throw new Error('Fehler beim Abrufen der PDFs');
        }
        const data = await response.json();
        setPdfList(data);
      } catch (error) {
        console.error('Fehler:', error);
      }
    };

    fetchPdfs();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const jsonString = JSON.stringify(formData, null, 2);
    
    // Boilerplate-Text mit ausgewählten PDFs hinzufügen
    const boilerplateText = `
{
  "title": "Sex and race differences in cardiovascular disease development",
  "population": "female and male",
  "age_range": "adult",
  "condition": "cardiovascular disease",
  "treatment": "general risk assessment",
  "outcome": "CVD risk and presentation differ between sexes and across ethnicities; women are more likely to experience microvascular dysfunction and non-obstructive disease.",
  "recommendation": "Sex-specific diagnostic criteria and risk assessment tools should be used to improve detection and management of CVD in women.",
  "tags": ["cardiovascular", "diagnosis", "sex differences", "microvascular disease", "women"],
  "source": "https://doi.org/10.31083/RCM26430",
  "selectedPapers": ${JSON.stringify(selectedPdfs)}
}
    `;
    
    setJsonOutput(boilerplateText); // Boilerplate-Text und JSON-String setzen
  };

  const handleCheckboxChange = (pdf) => {
    setSelectedPdfs((prevSelected) => {
      if (prevSelected.includes(pdf)) {
        return prevSelected.filter((item) => item !== pdf);
      } else {
        return [...prevSelected, pdf];
      }
    });
  };

  const handleAutoFill = () => {
    setFormData({
      title: "Sex and race differences in cardiovascular disease development",
      population: "female and male",
      age_range: "adult",
      condition: "cardiovascular disease",
      treatment: "general risk assessment",
      outcome: "CVD risk and presentation differ between sexes and across ethnicities; women are more likely to experience microvascular dysfunction and non-obstructive disease.",
      recommendation: "Sex-specific diagnostic criteria and risk assessment tools should be used to improve detection and management of CVD in women.",
      tags: "cardiovascular, diagnosis, sex differences, microvascular disease, women",
      source: "https://doi.org/10.31083/RCM26430",
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground items-center justify-center mt-10 mb-10">
      <h2 className="text-4xl font-bold mb-4">Geschlechtsabhängige Merkmale</h2>
      <form onSubmit={handleSubmit} className="w-1/2 space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Titel"
          value={formData.title}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded w-full"
        />
        <input
          type="text"
          name="population"
          placeholder="Population"
          value={formData.population}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded w-full"
        />
        <input
          type="text"
          name="age_range"
          placeholder="Altersgruppe"
          value={formData.age_range}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded w-full"
        />
        <input
          type="text"
          name="condition"
          placeholder="Zustand"
          value={formData.condition}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded w-full"
        />
        <input
          type="text"
          name="treatment"
          placeholder="Behandlung"
          value={formData.treatment}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded w-full"
        />
        <textarea
          name="outcome"
          placeholder="Ergebnis"
          value={formData.outcome}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded w-full h-32"
        />
        <textarea
          name="recommendation"
          placeholder="Empfehlung"
          value={formData.recommendation}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded w-full h-32"
        />
        <input
          type="text"
          name="tags"
          placeholder="Tags (kommagetrennt)"
          value={formData.tags}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded w-full"
        />
        <input
          type="text"
          name="source"
          placeholder="Quelle"
          value={formData.source}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded w-full"
        />
        <div className="flex justify-between">
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 w-1/2 mr-2">
            Eingaben speichern
          </button>
          <button type="button" onClick={handleAutoFill} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300 w-1/2 ml-2">
            Eingaben automatisch ausfüllen
          </button>
        </div>
      </form>
      <h3 className="text-2xl font-bold mt-4">Verfügbare PDFs</h3>
      <div className="mt-4 w-1/2">
        {pdfList.map((pdf) => (
          <div key={pdf} className="flex items-center mb-2 p-2 border border-gray-300 rounded hover:bg-gray-100 transition duration-200">
            <input
              type="checkbox"
              id={pdf}
              value={pdf}
              checked={selectedPdfs.includes(pdf)}
              onChange={() => handleCheckboxChange(pdf)}
              className="mr-2 w-5 h-5"
            />
            <label htmlFor={pdf} className="text-lg">{pdf}</label>
          </div>
        ))}
      </div>
      <h3 className="text-2xl font-bold mt-4">Geschlechtsabhängige Merkmal</h3>
      <textarea
        value={jsonOutput}
        readOnly
        className="mt-4 p-2 border border-gray-300 rounded w-1/2 h-64"
      />
    </div>
  );
};

export default Professionell; 