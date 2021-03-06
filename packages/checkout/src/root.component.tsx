import React, { useEffect, useState } from 'react';

const PRODUCTS_URL = "https://fakestoreapi.com/products";

export default function Root(props) {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(`${PRODUCTS_URL}?limit=5`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setProducts(data);
      });
  }, []);

  const total = products.reduce((calc, product) => calc + product.price, 0);

  return (
    <div className="grid gap-4 grid-cols-1 py-4">
      {products.map((product) => (
        <div className="md:flex shadow p-4">
          <div className="md:flex-shrink-0">
            <img className="rounded-lg md:w-24" src={product.image} />
          </div>
          <div className="mt-4 md:mt-0 md:ml-6">
            <div className="uppercase tracking-wide text-sm text-indigo-600 font-bold">
              {product.category}
            </div>
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline"
            >
              {product.title}
            </a>
            <p className="mt-2 text-gray-800 font-semibold">${product.price}</p>
          </div>
          <div className="flex-grow text-right">1</div>
        </div>
      ))}
      {!loading && (
        <>
          <div className="mt-2 flex justify-end">
            <p className="font-semibold">Total: ${total}</p>
          </div>
          <div className="mt-2 text-right">
            <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
