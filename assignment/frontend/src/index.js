import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import any global styles here
import App from './App'; // Import your main App component
import reportWebVitals from './reportWebVitals'; // Optional: For performance reporting

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Optional: For performance metrics
reportWebVitals();