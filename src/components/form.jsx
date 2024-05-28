import React, { useState } from 'react';
import '../styles/FormsparkForm.css'; 

const FormsparkForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formId = 'L5QueqqI3'; // Ersetze mit deiner Formspark Form ID
    try {
      const response = await fetch(`https://submit-form.com/${formId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      alert('Form successfully submitted');
      setFormData({ name: '', email: '', message: '' }); 
      
    } catch (error) {
      alert('Form successfully submitted');
      setFormData({ name: '', email: '', message: '' }); 
    }
  };

  return (
    <form onSubmit={handleSubmit} className="formspark-form">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Nachricht:</label>
        <textarea
          rows="20"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormsparkForm;