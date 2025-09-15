import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.jsx';
import './styles/home.css';  // ✅ Only one stylesheet now

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
