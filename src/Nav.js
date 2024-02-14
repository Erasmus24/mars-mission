import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch('https://source.unsplash.com/random/800x600/?mars');
        const data = await response.blob();
        const url = URL.createObjectURL(data);
        setBackgroundImage(`url(${url})`);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, []); 

  return (
    <nav className="Nav" style={{ backgroundImage }}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/task">Task</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;

