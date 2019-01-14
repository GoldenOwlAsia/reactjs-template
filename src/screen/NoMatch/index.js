import React from 'react';
import './style.css';

export default ({ location }) => (
  <div className="nomatch-container">
    <span className="nomatch-title">
      No match for
      <code>{location.pathname}</code>
    </span>
  </div>
);
