import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

console.log('React version:', React.version);
console.log('ReactDOM:', ReactDOM);

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
