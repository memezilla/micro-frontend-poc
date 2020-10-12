import React from 'react';
import { useSelector } from 'react-redux';

interface CartProps {
  onClick: () => void;
}
export default function Cart(props: CartProps) {
  const plan = useSelector((state) => state.plan);
  const { onClick } = props;
  return (
    <button className="px-4 py-1 bg-gray-400 ml-auto" onClick={onClick}>
      {plan}
    </button>
  );
}
