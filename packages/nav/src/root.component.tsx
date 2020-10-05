import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

export default function Root() {
  return (
    <BrowserRouter>
      <nav className="flex p-4 border-b-2">
        <Link to="/" className="font-semibold mr-4">
          MicroFrontend
        </Link>
        <Link to="/catalog" className="text-blue-600 mr-4">
          Catalog
        </Link>
        <Link to="/checkout" className="text-blue-600">
          Checkout
        </Link>
      </nav>
    </BrowserRouter>
  );
}
