import React, { useState, useEffect } from 'react';

function AdoptPet() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/pets')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch pets');
        }
        return response.json();
      })
      .then(data => {
        setPets(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleAdoptRequest = (petId) => {
    // In a real application, this would send a request to the backend
    console.log(`Adoption requested for pet with ID: ${petId}`);
  };

  if (loading) return <div>Loading pets...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Adopt a Pet</h2>
      <div>
        <h3>Available Pets</h3>
        {pets.length === 0 ? (
          <p>No pets available for adoption at the moment.</p>
        ) : (
          <ul>
            {pets.map(pet => (
              <li key={pet.id}>
                <h4>{pet.name} ({pet.species})</h4>
                <p>Breed: {pet.breed}</p>
                <p>Age: {pet.age} years</p>
                <p>{pet.description}</p>
                <button onClick={() => handleAdoptRequest(pet.id)}>Request to Adopt</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default AdoptPet;

