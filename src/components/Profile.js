import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bio: '',
    location: '',
    image_url: '',
    interests: '',
    date_of_birth: '',
    phone_number: ''
  });

  useEffect(() => {
    // Fetch user profile data from the backend API
    fetch('http://localhost:3000/profiles', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        setUser(data);
        setFormData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching user profile:', error);
        setLoading(false);
      });
  }, []);

  const handleChange = event => {
    event.preventDefault();
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    const updatedFormData = {
      ...formData,
      user_id: user.id 
    };
  
    fetch('http://localhost:3000/profiles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedFormData),
    })
      .then(response => response.json())
      .then(data => {
        setUser(data);
        setFormData(data)
        console.log(data);
        window.alert('Profile Created Successfully');
      })
      .catch(error => {
        console.error('Error creating user profile:', error);
        window.alert('Create failed. One of the fields was invalid. Please try again');
      });
  };
  
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1>Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            type="text"
            id="name"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            id="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="bio" className="form-label">Bio:</label>
          <input
            type="text"
            id="bio"
            className="form-control"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="location" className="form-label">Location:</label>
          <input
            type="text"
            id="location"
            className="form-control"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image_url" className="form-label">Image URL:</label>
          <input
            type="text"
            id="image_url"
            className="form-control"
            name="image_url"
            value={formData.image_url}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="interests" className="form-label">Interests:</label>
          <input
            type="text"
            id="interests"
            className="form-control"
            name="interests"
            value={formData.interests}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="date_of_birth" className="form-label">Date of Birth:</label>
          <input
            type="date"
            id="date_of_birth"
            className="form-control"
            name="date_of_birth"
            value={formData.date_of_birth}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone_number" className="form-label">Phone Number:</label>
          <input
            type="number"
            id="phone_number"
            className="form-control"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Create Profile</button>
      </form>
    </div>
  );
};

export default Profile;
