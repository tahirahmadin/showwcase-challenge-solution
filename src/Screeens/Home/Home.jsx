import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Home.css';

const namesUrl = 'http://universities.hipolabs.com/search?country=turkey&name=';
export default function Home() {
  const [username, setUsername] = useState('');

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div className="home-container">
      <h4 className="home-heading mb-3">Hi there! Welcome to your education showcase.</h4>
      <div>
        <h5>Type your name and click "Enter below to begin!"</h5>
        <div className="mt-3">
          {/* <input
            className="inputfield"
            type="text"
            name="word"
            onChange={debouncedCall(handleSearch, 500)}
            placeholder="Your name"
          /> */}
          <input className="inputfield" type="text" name="username" onChange={handleChange} placeholder="Your name" />
        </div>

        <div className="mt-3">
          <Link to={`/user-detail/${username}`}>
            <button className="enter-button">Enter</button>
          </Link>
        </div>
      </div>
      <div></div>
    </div>
  );
}
