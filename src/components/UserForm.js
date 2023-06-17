import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../UserForm.css'; 

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    gender: 'Male',
  });

  const [errors, setErrors] = useState({
    name: '',
    age: '',
    email: '',
  });

  // const history = useHistory();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate('/userData', {state: formData });
      // navigate('/userData', {userData: formData });
    }
  };

  const validateForm = () => {
    let valid = true;
    const { name, age, email } = formData;
    const errorsCopy = { ...errors };

    if (!name || name.trim() === '') {
      errorsCopy.name = 'Please enter valid name.';
      valid = false;
    } else {
      errorsCopy.name = '';
    }

    if (!age || age.trim() === '' || age <= 0) {
      errorsCopy.age = 'Please enter valid age.';
      valid = false;
    } else if (isNaN(age)) {
      errorsCopy.age = 'Age must be a number.';
      valid = false;
    } else {
      errorsCopy.age = '';
    }

    if (!email || email.trim() === '') {
      errorsCopy.email = 'Please enter your email.';
      valid = false;
    } else if (!isValidEmail(email)) {
      errorsCopy.email = 'Please enter a valid email.';
      valid = false;
    } else {
      errorsCopy.email = '';
    }

    setErrors(errorsCopy);
    return valid;
  };

  const isValidEmail = (email) => {
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="container">
      <h1>User Data Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="text"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
          />
          {errors.age && <span className="error">{errors.age}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
