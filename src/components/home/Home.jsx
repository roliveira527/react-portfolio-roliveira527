import React from 'react';

const Home = () => {
  return (
    <div className="container mt-5">
      <h1>Welcome to Your Portfolio</h1>
      <div className="row">
        <div className="col-lg-6">
          <img src="path_to_headshot.jpg" alt="Headshot" className="img-fluid rounded-circle mt-4" />
        </div>
        <div className="col-lg-6">
          <p>Your brand statement</p>
          <p>This is your portfolio site</p>
        </div>
      </div>
    </div>
  );
}

export default Home;