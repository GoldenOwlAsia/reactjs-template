import React from 'react';
import { Helmet } from 'react-helmet';

import './style.css';

export default () => (
  <div className="home-container">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Home</title>
    </Helmet>
    <span className="home-title">Home Screen</span>
  </div>
);
