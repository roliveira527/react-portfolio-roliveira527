import React from 'react';
import './Home.css'

const Home = () => {
  return (
    <div className="container-fluid mt-5 home-container">
      <div className="row">
        <div className="col-lg-5 col-custom">
          <h1>Welcome to Ricardo's Portfolio</h1>
          <img src="\assets\headshot.jpg" alt="Headshot" className="img-fluid rounded-circle mt-4" width="300" />
        </div>
        <div className="col-lg-5 col-custom">
          <h4>BSc Computer Science / Software Engineer</h4>
          <p>
            This is my portfolio where you can browse some of my projects.
            You can also find more information on how you can contact me.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;