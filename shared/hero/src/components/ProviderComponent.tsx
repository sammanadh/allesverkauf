import React from 'react';
import './ProviderComponent.css';

import Hero from "./Hero";

const Provider: React.FC = () => {
  return (
    <div className="container">
      <Hero />
    </div>
  );
};

export default Provider;
