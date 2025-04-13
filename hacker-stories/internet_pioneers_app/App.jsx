import React, { useState } from 'react';
import { pioneers as pioneerData } from './data';
import Home from './Home';
import Pioneer from './Pioneer';

export default function App() {
  const [pioneers, setPioneers] = useState(pioneerData);
  const [selectedPioneer, setSelectedPioneer] = useState(null);

  const handlePioneerClick = (id) => {
    const updatedPioneers = pioneers.map((p) =>
      p.id === id ? { ...p, viewed: true } : p
    );
    setPioneers(updatedPioneers);
    const pioneer = updatedPioneers.find((p) => p.id === id);
    setSelectedPioneer(pioneer);
  };

  const handleBack = () => {
    setSelectedPioneer(null);
  };

  return (
    <div className="container mt-4">
      {!selectedPioneer ? (
        <Home pioneers={pioneers} onPioneerClick={handlePioneerClick} />
      ) : (
        <Pioneer pioneer={selectedPioneer} onBack={handleBack} />
      )}
    </div>
  );
}