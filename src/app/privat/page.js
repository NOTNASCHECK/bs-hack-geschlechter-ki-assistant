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

  const apiUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}/api/schnipsel` : 'http://localhost:3000/api/schnipsel';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, age, gender, condition, treatment, bloodPressure, notes } = formData;

    // Erstelle den zusammenhängenden Text
    const requestText = `Name: ${name}, Alter: ${age}, Geschlecht: ${gender}, Krankheit: ${condition}, Behandlung: ${treatment}, Blutdruck: ${bloodPressure}, Notizen: ${notes}`;

    // Gebe den Text in der Konsole aus
    console.log(requestText);

    // Sende die Anfrage an den Endpoint
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            {
              role: 'user',
              content: requestText + 'Antwortformat: Feedback und Abweichung aufführen. Stukturiiert und mit Quellenverweis auf die Quellendateien.',
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error('Fehler beim Senden der Anfrage');
      }

      const data = await response.json();
      console.log('Antwort vom Server:', data);

      // Setze die Empfehlung basierend auf der Antwort des Servers
      setRecommendation(data.choices[0].message.content);
      console.log(data.choices[0].message.content);
    } catch (error) {
      console.error('Fehler:', error);
      setRecommendation('Es gab einen Fehler bei der Verarbeitung Ihrer Anfrage.');
    }
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
          <h2 className="text-xl font-semibold">Recommendation:</h2>
          <p>{recommendation.split('Splitter')[0]}</p>
          <h2 className="text-xl font-semibold">Source:</h2>
          <p>{recommendation.split('Splitter')[1]}</p>
        </div>
      )}
    </div>
  );
};

export default Privat; 