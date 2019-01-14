import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default () => (
  <div className="menu-contaner">
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/users">Users</Link>
  </div>
);
