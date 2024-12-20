import React, { useEffect, useState } from 'react';
// import './products.css'
export default function Products() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('/products.json')
      .then(response => response.json())
      .then(data => setCards(data))
      .catch(error => console.error('Error fetching the products:', error));
  }, []);

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar */}
      <div className="sidebar">
        <div style={{ marginTop: "23px" }}>
          <h1 style={{ marginBottom: "15px", fontSize: "35px" }}>Categories</h1>
          <ul style={{ listStyleType: 'none', padding: 0, overflowY: "auto" }}>
            <li style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: "10px", paddingBottom: "10px", borderBottom: "1px solid rgb(207, 205, 205)" }}>
              <img src="https://cdn.uengage.io/uploads/7175/image-961254-1701062393.jpeg" alt="Home" style={{ marginRight: '10px', height: "40px" }} />
              <a href="#">Home</a>
            </li>
            <li style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderTop: "1px gray solid" }}>
              <img src="https://cdn.uengage.io/uploads/7175/image-961254-1701062393.jpeg" alt="About" style={{ marginRight: '10px', height: "40px" }} />
              About
            </li>
            <li style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
              <img src="https://cdn.uengage.io/uploads/7175/image-961254-1701062393.jpeg" alt="Services" style={{ marginRight: '10px', height: "40px" }} />
              Services
            </li>
            <li style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
              <img src="https://cdn.uengage.io/uploads/7175/image-961254-1701062393.jpeg" alt="Contact" style={{ marginRight: '10px', height: "40px" }} />
              Contact
            </li>
            {/* Add more items as needed */}
          </ul>
        </div>
      </div>

      <div className="main-content">
        <h3 style={{ marginBottom: '5%' }}>Strawberry Specials</h3>
        <div className="cards-container">
          {cards.map((card, index) => (
            <div key={index} className="card">
              {/* Left side: Title, description, price */}
              <div>
                <h2 style={{ fontSize: '1.2rem', fontWeight: 'semibold', marginBottom: '8px', float: "left", textAlign: "left" }}>
                  {card.title}
                </h2><br></br>
                <p style={{ color: 'gray', marginBottom: '8px', float: "left", textAlign: "left" }}>{card.description}</p><br></br>
                <p style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '12px', float: "left" }}>
                  {card.price}
                </p>
              </div>

              {/* Right side: Image and button */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img
                  src={card.imgSrc}
                  alt={card.title}
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '8px',
                    marginBottom: '12px',
                  }}
                />
                <button
                  style={{
                    backgroundColor: '#b0dcd1',
                    color: '#000000',
                    border: 'none',
                    padding: '5px 16px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                  }}
                >
                  Select
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .sidebar {
          width: 18%;
          background-color: white;
          padding: 20px;
          box-shadow: 2px 0 5px rgba(0,0,0,0.1);
          position: fixed;
          height: 100%;
          overflow-y: auto;
        }

        .main-content {
          margin-left: 18%;
          padding: 20px;
          width: 80%;
          margin-top: 2%;
        }

        .cards-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 15px;
        }

        .card {
          background-color: white;
          display: flex;
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
          justify-content: space-between;
          align-items: center;
          transition: transform 0.3s ease-in-out;
        }

        .card:hover {
          transform: scale(1.09);
        }

        @media (max-width: 768px) {
          .sidebar {
            display: none;
          }

          .main-content {
            margin-left: 0;
            width: 100%;
          }
        }
      `}</style> 
    </div>
  );
}
