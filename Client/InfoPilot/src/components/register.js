import React, { useState } from 'react';
import "./register.css"
import "./contact.css"



const CreateAccountForm = () => {
    
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [phone, setPhone] = useState('');
        const [location, setLocation] = useState('');
      
        const handleNameChange = (event) => {
          setName(event.target.value);
        };
      
        const handleEmailChange = (event) => {
          setEmail(event.target.value);
        };
      
        const handlePhoneChange = (event) => {
          setPhone(event.target.value);
        };
      
        const handleLocationChange = (event) => {
          setLocation(event.target.value);
        };
      
        const handleSubmit = (event) => {
          event.preventDefault();
          // Perform registration logic here
          console.log('Name:', name);
          console.log('Email:', email);
          console.log('Phone:', phone);
          console.log('Location:', location);
          // Reset form fields
          setName('');
          setEmail('');
          setPhone('');
          setLocation('');
        };
      
        return (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div>
              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={handlePhoneChange}
                required
              />
            </div>
            <div>
              <label htmlFor="location">Location:</label>
              <input
                type="text"
                id="location"
                value={location}
                onChange={handleLocationChange}
                required
              />
            </div>
            <button type="submit">Register</button>
          </form>
        );
      };

export default CreateAccountForm;
