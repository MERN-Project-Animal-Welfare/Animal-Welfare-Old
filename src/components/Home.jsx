import React from 'react';
import './styless.css'

const divStyle = {
  backgroundPosition: "center center",
  width: '100vw',
  backgroundImage: `url(bgpic.jpg)`,
  backgroundSize: 'cover',
};

function Home() {
  return (
    <div className="landing-container" style={divStyle}>
        <div className="text-container">
            <h1>Our four-legged friends<br/>need your help.</h1>
            <p>Quest for Paws Animal Rescue and Sanctuary</p>
            <a href="/login" className="button">log in / sign up</a>
        </div>
    </div>
  );
}

export default Home;

