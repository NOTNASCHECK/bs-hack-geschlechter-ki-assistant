'use client'
import React, { useState } from 'react';

const Privat = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    condition: '',
    treatment: '',
    bloodPressure: '',
    notes: '',
  });

  const [recommendation, setRecommendation] = useState('');
  const [isCollapsed, setIsCollapsed] = useState({
    summary: false,
    feedback: false,
    deviations: false,
    sources: false,
    recommendations: false,
  });

  const apiUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}/api/schnipsel` : 'http://localhost:3000/api/schnipsel';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, age, gender, condition, treatment, bloodPressure, notes } = formData;

    const requestText = `Name: ${name}, Alter: ${age}, Geschlecht: ${gender}, Krankheit: ${condition}, Behandlung: ${treatment}, Blutdruck: ${bloodPressure}, Notizen: ${notes}`;

    console.log(requestText);

    try {
      const response = await fetch("https://bs-hack-geschlechter-ki-assistant.vercel.app/api/schnipsel", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.MISTRAL_API_KEY}`,
        },
        body: JSON.stringify({
          messages: [
            {
              role: 'user',
              content: requestText + 'Antwortformat: 1. ZUSAMMENFASSUNG: - Prägnante Zusammenfassung der Hauptergebnisse (3-5 Sätze) 2. FEEDBACK: - Wichtigste Erkenntnisse in Stichpunkten - Identifizierte Stärken und Schwächen - Konkrete Verbesserungsvorschläge 3. ABWEICHUNGEN: - Liste aller relevanten Abweichungen vom erwarteten Ergebnis - Kategorisierung nach Schweregrad (kritisch, bedeutend, geringfügig) - Potenzielle Auswirkungen der Abweichungen - Falls keine Abweichungen: - keine Informationen - 4. EMPFEHLUNGEN: - Priorisierte Handlungsempfehlungen, basierend auf den Erkenntnissen - Falls keine Empfehlungen: - keine Informationen - 5. QUELLENVERWEISE: - [Q1] Verweis auf Quellendatei 1, Seite/Abschnitt X: "Zitat oder relevante Passage" - [Q2] Verweis auf Quellendatei 2, Seite/Abschnitt Y: "Zitat oder relevante Passage" - Weitere Quellen mit präzisen Seitenangaben und Zitaten - Falls keine Quellenverweise: - keine Informationen -',
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error('Netzwerkantwort war nicht ok.');
      }

      const data = await response.json();
      if (data.choices && data.choices.length > 0) {
        setRecommendation(data.choices[0].message.content);
      } else {
        setRecommendation('Keine gültige Antwort erhalten.');
      }
      console.log(data);
    } catch (error) {
      console.error('Fehler:', error);
      setRecommendation('Es gab einen Fehler bei der Verarbeitung Ihrer Anfrage.');
    }
  };

  const toggleCollapse = (section) => {
    setIsCollapsed((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground items-center justify-center">
      <h2 className="text-4xl font-bold mb-4">Patientenspezifikation</h2>
      <form onSubmit={handleSubmit} className="w-1/2">
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="p-2 border border-gray-300 rounded mb-4 w-full" />
        <input type="number" name="age" placeholder="Alter" value={formData.age} onChange={handleChange} className="p-2 border border-gray-300 rounded mb-4 w-full" />
        <select name="gender" value={formData.gender} onChange={handleChange} className="p-2 border border-gray-300 rounded mb-4 w-full">
          <option value="">Geschlecht wählen</option>
          <option value="female">Weiblich</option>
          <option value="male">Männlich</option>
          <option value="other">Andere</option>
        </select>
        <input type="text" name="condition" placeholder="Krankheit" value={formData.condition} onChange={handleChange} className="p-2 border border-gray-300 rounded mb-4 w-full" />
        <input type="text" name="treatment" placeholder="Behandlung" value={formData.treatment} onChange={handleChange} className="p-2 border border-gray-300 rounded mb-4 w-full" />
        <input type="text" name="bloodPressure" placeholder="Blutdruck (z.B. 145/90)" value={formData.bloodPressure} onChange={handleChange} className="p-2 border border-gray-300 rounded mb-4 w-full" />
        <textarea 
          name="notes" 
          placeholder="Notizen" 
          value={formData.notes} 
          onChange={handleChange} 
          className="p-2 border border-gray-300 rounded mb-4 w-full" 
        />
        <select 
          name="commonQuestions" 
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })} 
          className="p-2 border border-gray-300 rounded mb-4 w-full"
        >
          <option value="">Häufige Fragen auswählen</option>
          <option value="Behandlung optimal nach Leitlinien?">Behandlung optimal nach Leitlinien?</option>
          <option value="Was wäre ein Behandlungsvorschlag?">Was wäre ein Behandlungsvorschlag?</option>
          <option value="Gibt es weiter Diagnostik die sinnvoll ist?">Gibt es weiter Diagnostik die sinnvoll ist?</option>
        </select>
        <button 
          type="button" 
          onClick={() => setFormData({
            name: 'Max Mustermann',
            age: '55',
            gender: 'male',
            condition: 'Bluthochdruck',
            treatment: 'Amlodipine 5mg täglich',
            bloodPressure: '145/90',
            notes: 'Keine besonderen Anmerkungen'
          })} 
          className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 mb-4 w-full"
        >
          Daten automatisch auslesen
        </button>
        <button 
          type="submit" 
          className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out w-full"
        >
          Recherche starten
        </button>
      </form>
      {recommendation && (
        <div className="mt-8 p-4 border border-gray-300 rounded bg-gray-100 w-1/2 text-black">
          <h2 className="text-xl font-semibold cursor-pointer" onClick={() => toggleCollapse('summary')}>
            1. ZUSAMMENFASSUNG:
          </h2>
          <button onClick={() => toggleCollapse('summary')} className="text-blue-500">
            {isCollapsed.summary ? 'Mehr anzeigen' : 'Weniger anzeigen'}
          </button>
          {!isCollapsed.summary && recommendation && <p>{recommendation.split('2. FEEDBACK:')[0]}</p>}

          <h2 className="text-xl font-semibold cursor-pointer" onClick={() => toggleCollapse('feedback')}>
            2. FEEDBACK:
          </h2>
          <button onClick={() => toggleCollapse('feedback')} className="text-blue-500">
            {isCollapsed.feedback ? 'Mehr anzeigen' : 'Weniger anzeigen'}
          </button>
          {!isCollapsed.feedback && recommendation && <p>{recommendation.split('2. FEEDBACK:')[1].split('3. ABWEICHUNGEN:')[0]}</p>}

          <h2 className="text-xl font-semibold cursor-pointer" onClick={() => toggleCollapse('deviations')}>
            3. ABWEICHUNGEN:
          </h2>
          <button onClick={() => toggleCollapse('deviations')} className="text-blue-500">
            {isCollapsed.deviations ? 'Mehr anzeigen' : 'Weniger anzeigen'}
          </button>
          {!isCollapsed.deviations && recommendation && <p>{recommendation.split('3. ABWEICHUNGEN:')[1].split('4. QUELLENVERWEIS:')[0]}</p>}

          <h2 className="text-xl font-semibold cursor-pointer" onClick={() => toggleCollapse('sources')}>
            4. QUELLENVERWEIS:
          </h2>
          <button onClick={() => toggleCollapse('sources')} className="text-blue-500">
            {isCollapsed.sources ? 'Mehr anzeigen' : 'Weniger anzeigen'}
          </button>
          {!isCollapsed.sources && recommendation && <p>{recommendation.split('4. QUELLENVERWEIS:')[1].split('5. EMPFEHLUNGEN:')[0]}</p>}

          <h2 className="text-xl font-semibold cursor-pointer" onClick={() => toggleCollapse('recommendations')}>
            5. EMPFEHLUNGEN:
          </h2>
          <button onClick={() => toggleCollapse('recommendations')} className="text-blue-500">
            {isCollapsed.recommendations ? 'Mehr anzeigen' : 'Weniger anzeigen'}
          </button>
          {!isCollapsed.recommendations && recommendation && <p>{recommendation.split('5. EMPFEHLUNGEN:')[1]}</p>}
        </div>
      )}
    </div>
  );
};

export default Privat; 