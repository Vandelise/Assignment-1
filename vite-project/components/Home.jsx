import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Welcome to My Full Stack Developer Portfolio!</h1>
      <p>Thank you for visiting. This is the home page where you can learn more about my skills and projects.</p>
      <h2>My Mission</h2>
      <p>
        As a full stack developer, my mission is to leverage cutting-edge technologies to build robust and scalable web applications that solve real-world problems and enhance user experiences.
      </p>

      <div>
        <Link to="/aboutme">
        <button style={{ backgroundColor: '#444', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Learn More About Me</button>
        </Link>
      </div>
    </div>
  );
}