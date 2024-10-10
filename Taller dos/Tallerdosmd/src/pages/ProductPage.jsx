import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from '../components/ProductDetails';

const products = [
  { id: 1, name: 'Product 1', description: 'Description 1', price: 10 },
  { id: 2, name: 'Product 2', description: 'Description 2', price: 15 },
  { id: 3, name: 'Product 3', description: 'Description 3', price: 20 },
];

function ProductPage({ addToCart }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  return product ? (
    <ProductDetails product={product} addToCart={addToCart} />
  ) : (
    <p>Product not found</p>
  );
}

export default ProductPage;
