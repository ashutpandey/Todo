import React from 'react';
import { Link } from 'react-router-dom';

function WelcomePage() {
  return (
    <div className="page-container">
      <h2>Welcome to ReactTodo!</h2>
      <p>The simplest way to manage your daily tasks.</p>
      <Link to="/todos" className="cta-button">Get Started</Link>
    </div>
  );
}

export default WelcomePage;
