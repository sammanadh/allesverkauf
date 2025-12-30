import React from 'react';
import './ProviderComponent.css';
import ProductList from './ProductList';
import { Product } from '../types/product';

const Provider: React.FC = () => {
  const handleAddToCard = (p: Product) => {
    alert(`adding ${p.name} to card!!!`)
    console.log(p)
  }
  return (
    <ProductList onAddToCart={handleAddToCard} />
  );
};

export default Provider;
