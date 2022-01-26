import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './Header.css';

export default function Index() {
  return (
    <header className="header">
      <div>Header</div>
      <FaShoppingCart className="icon-header" />
    </header>
  );
}
