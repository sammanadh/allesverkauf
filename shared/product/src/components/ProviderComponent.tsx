import React from 'react';
import './ProviderComponent.css';
import ProductList from './ProductList';

const Provider: React.FC = () => {
  return (
    <div className="container m-auto">
      <ProductList />
    </div>
  );
};

export default Provider;
