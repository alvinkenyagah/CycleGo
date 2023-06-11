import React, { useState } from 'react';

function BikeForm() {
  const [model, setModel] = useState('');
  const [size, setSize] = useState('');
  const [description, setDescription] = useState('');
  const [imageURL, setImageURL] = useState('');

  const handleModelChange = (e) => {
    setModel(e.target.value);
  };

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageURLChange = (e) => {
    setImageURL(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bikeData = {
      model,
      size,
      description,
      image_url: imageURL,
    };

    try {
      const response = await fetch('http://localhost:9000/bikes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bikeData),
      });

      if (response.ok) {
        // Bike successfully created
        // Reset form fields
        setModel('');
        setSize('');
        setDescription('');
        setImageURL('');
        alert('Bike created successfully!');
      } else {
        // Error creating bike
        const errorData = await response.json();
        alert(`Failed to create bike: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Error creating bike:', error);
      alert('An error occurred while creating the bike.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Model:
        <input type="text" value={model} onChange={handleModelChange} />
      </label>
      <br />
      <label>
        Size:
        <input type="text" value={size} onChange={handleSizeChange} />
      </label>
      <br />
      <label>
        Description:
        <input type="text" value={description} onChange={handleDescriptionChange} />
      </label>
      <br />
      <label>
        Image URL:
        <input type="text" value={imageURL} onChange={handleImageURLChange} />
      </label>
      <br />
      <br />
      <button type="submit" style={{marginTop:"20PX"}}>Create Bike</button>
    </form>
  );
}

export default BikeForm;
