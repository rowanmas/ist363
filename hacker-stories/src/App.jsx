// data.js
export const pioneers = [
  {
    id: 1,
    name: "Elizabeth J. Feinler",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Elizabeth_J._Feinler.jpg/440px-Elizabeth_J._Feinler.jpg",
    age: 91,
    info: "Contributed to ARPANET and managed the domain naming system.",
    viewed: false
  },
  {
    id: 2,
    name: "Tim Berners Lee",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Tim_Berners-Lee_CP_2.jpg/440px-Tim_Berners-Lee_CP_2.jpg",
    age: 69,
    info: "Inventor of the World Wide Web, HTML, HTTP, and URL.",
    viewed: false
  },
  {
    id: 3,
    name: "Ray Tomlinson",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Ray_Tomlinson_2014.jpg/440px-Ray_Tomlinson_2014.jpg",
    age: 74,
    info: "Implemented the first email system on the ARPANET.",
    viewed: false
  }
];

// Home.jsx

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

// Pioneer.jsx
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
