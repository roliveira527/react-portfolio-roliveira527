import React from 'react';
import './Home.css'

const Home = () => {
  return (
    <div className="container-fluid mt-5 home-container">
      <h1>Welcome to Ricardo's Portfolio</h1>
      <div className="row">
        <div className="col-lg-6">
          <img src="src\assets\headshot.jpg" alt="Headshot" className="img-fluid rounded-circle mt-4" width="500" />
        </div>
        <div className="col-lg-6">
          <p>BSc Computer Science</p>
          <p>Software Engineer</p>
        </div>
      </div>
    </div>
  );
}

export default Home;