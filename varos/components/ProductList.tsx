'use client'

import React from 'react';
import { Product } from '../lib/products';
import { useCart } from '../contexts/CartContext';

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map(product => (
        <div key={product.id} className="border p-4 rounded-lg shadow">
          <h3 className="font-bold">{product.name}</h3>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-lg font-semibold mt-2">{product.price} Ft</p>
          <button
            onClick={() => addToCart(product)}
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Kosárba
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

