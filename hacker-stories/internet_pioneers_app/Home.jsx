import React from 'react';

export default function Home({ pioneers, onPioneerClick }) {
  return (
    <div>
      <h2>Internet Pioneers Bios</h2>
      <div className="row">
        {pioneers.map((pioneer) => (
          <div className="col-md-4 mb-4" key={pioneer.id}>
            <div className="card">
              <div className="position-relative">
                <img
                  src={pioneer.image}
                  alt={pioneer.name}
                  className="card-img-top"
                  onClick={() => onPioneerClick(pioneer.id)}
                  style={{ cursor: 'pointer' }}
                />
                {pioneer.viewed && (
                  <span className="badge bg-danger position-absolute top-0 start-0 m-2">VIEWED</span>
                )}
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">{pioneer.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}