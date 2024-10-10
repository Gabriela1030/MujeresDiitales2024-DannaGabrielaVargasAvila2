import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

function Header({ cartItems }) {
  return (
    <header>
      <h1> GAMAL Joyeria Catalog</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">
          <FaShoppingCart /> ({cartItems.length})
        </Link>
      </nav>
    </header>
  );
}

export default Header;
