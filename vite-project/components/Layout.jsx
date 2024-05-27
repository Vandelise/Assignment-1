import React from 'react';
import { Link } from 'react-router-dom';
export default function Layout() {
 return (
<>
      <h1>
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          <img
            src="/src/logo.jpg"
            alt="My Logo"
            style={{ width: '150px', padding: '0em 0.5em 0em 0.1em' }}
          />
          My Portfolio
        </Link>
      </h1>
 <nav>
 <Link to="/">Home</Link> | <Link to="/aboutme">About Me</Link> | <Link to="/services">Services</Link> | <Link to="/projects">Projects</Link> | <Link to="/contact">Contact</Link>
 </nav>
<br/>
 <hr />

 </>
 
 );
}



