'use client'

import React from 'react';
import { useCart } from '../contexts/CartContext';

const Cart: React.FC = () => {
  const { items, removeFromCart, total } = useCart();

  return (
    <div className="border p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Kosár</h2>
      {items.length === 0 ? (
        <p>A kosár üres.</p>
      ) : (
        <>
          {items.map(item => (
            <div key={item.id} className="flex justify-between items-center mb-2">
              <span>{item.name} (x{item.quantity})</span>
              <span>{item.price * item.quantity} Ft</span>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                Törlés
              </button>
            </div>
          ))}
          <div className="mt-4 text-xl font-bold">
            Összesen: {total} Ft
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

