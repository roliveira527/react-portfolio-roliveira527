import React from 'react';

const Contact = () => {
  return (
    <div className="container mt-5">
      <h2>Contact Information</h2>
      <p>GitHub: <a href="https://github.com/roliveira527">github.com/roliveira527</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/ricardo-oliveira-cs/">linkedin.com/in/ricardo-oliveira-cs/</a></p>
      <p>Email: r.deoliveira527@gmail.com</p>
      <p>Phone: (123) 456-7890</p>
      <p>CV: {"\n"}
        <a href="src\assets\Ricardo_Oliveira_CV___1608.pdf" target="_blank" rel="noopener noreferrer">Download CV (PDF)</a>
      </p>
    </div>
  );
}

export default Contact;