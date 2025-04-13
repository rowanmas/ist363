import React from 'react';

export default function Pioneer({ pioneer, onBack }) {
  return (
    <div className="card p-4 bg-light">
      <h2>{pioneer.name}</h2>
      <img
        src={pioneer.image}
        alt={pioneer.name}
        className="img-fluid mb-3"
        style={{ maxWidth: '300px' }}
      />
      <p><strong>Age:</strong> {pioneer.age}</p>
      <p><strong>Known For:</strong> {pioneer.info}</p>
      <button className="btn btn-primary mt-3" onClick={onBack}>Return to Directory</button>
    </div>
  );
}