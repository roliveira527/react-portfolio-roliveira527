import React , { useState } from 'react';
import './Contact.css';

const Contact = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container mt-5">
      <h2>Contact Form</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <hr className="horz-bar"></hr>
      <h2 className="mt-5">Contact Information</h2>
      <p>GitHub: <a href="https://github.com/roliveira527">github.com/roliveira527</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/ricardo-oliveira-cs/">linkedin.com/in/ricardo-oliveira-cs/</a></p>
      <p>Email: r.deoliveira527@gmail.com</p>
      <p>Phone: (123) 456-7890</p>
      <p>CV: {"\n"}
        <a href="Ricardo_Oliveira_CV___1608.pdf" target="_blank" rel="noopener noreferrer">Download CV (PDF)</a>
      </p>
    </div>
  );
}

export default Contact;