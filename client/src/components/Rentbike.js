import React, { useState, useEffect } from 'react';

function Rentbike() {
  const [bikes, setBikes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchBikes();
  }, []);

  const fetchBikes = async () => {
    try {
      const response = await fetch('http://localhost:9000/bikes');
      if (response.ok) {
        const bikeData = await response.json();
        setBikes(bikeData);
      } else {
        alert('Failed to fetch bikes.');
      }
    } catch (error) {
      console.error('Error fetching bikes:', error);
      alert('An error occurred while fetching bikes.');
    }
  };

  const deleteBike = async (id) => {
    try {
      const response = await fetch(`http://localhost:9000/bikes/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        // Remove the deleted bike from the bikes state
        setBikes((prevBikes) => prevBikes.filter((bike) => bike.id !== id));
      } else {
        alert('Failed to delete bike.');
      }
    } catch (error) {
      console.error('Error deleting bike:', error);
      alert('An error occurred while deleting the bike.');
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredBikes = bikes.filter((bike) =>
    bike.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <style>
        {`
        #rentbike-ul {
          
          list-style-type: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          grid-gap: 20px;
        }

        #rentbike-li {
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 10px;
          background-color: #0f0d166c;
          border-radius: 5px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          max-width: 100%;
        }

        #rentbike-li img {
          width: 100%;
          max-width: 350px;
          height: auto;
          margin-bottom: 10px;
        }

        #rentbike-h3 {
          font-size: 30px;
          margin-bottom: 5px;
        }

        #rentbike-p {
          margin: 0;
          font-size: 25px;
        }
        `}
      </style>
      <input
        type="text"
        placeholder="Search by description"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ul id="rentbike-ul">
        {filteredBikes.map((bike) => (
          <li id="rentbike-li" key={bike.id}>
            <img src={bike.image_url} alt={bike.model} />
            <h3 id="rentbike-h3">{bike.model}</h3>
            <p id="rentbike-p">Size: {bike.size}</p>
            <p id="rentbike-p">Description: {bike.description}</p>
            <button onClick={() => deleteBike(bike.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Rentbike;
