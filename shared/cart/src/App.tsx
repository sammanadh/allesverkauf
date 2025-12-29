import { useState } from 'react';
import './App.css';
import Provider from './components/ProviderComponent';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="content">
      <button onClick={() => setIsOpen(true)}>open</button>
      <Provider isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default App;
