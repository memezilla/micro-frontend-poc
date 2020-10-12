import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { BrowserRouter, Link } from 'react-router-dom';

import Cart from './Cart';

export default function Root(props: any) {
  const {
    store,
    slices: { planSlice },
  } = props;
  const changePlan = () => store.dispatch(planSlice.actions.setPlan(14));

  return (
    <Provider store={store}>
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
          <Cart onClick={changePlan} />
        </nav>
      </BrowserRouter>
    </Provider>
  );
}
