import React from 'react';
import { Helmet } from 'react-helmet';

import './style.css';

export default () => (
  <div className="about-container">
    <Helmet>
      <meta charSet="utf-8" />
      <title>About</title>
    </Helmet>
    <span className="about-title">About Screen</span>
  </div>
);
