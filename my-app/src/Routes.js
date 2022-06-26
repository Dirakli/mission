import { Routes as Router, Route } from 'react-router-dom';

import { Home } from './pages/home';
import { Products } from './pages/products/Products';
import { NoMatch } from './pages/NoMatch';
import { ShoppingCart } from './pages/shopping-cart/ShoppingCart';

export const Routes = () => {
  return (
    <div className='my-3' style={{
        minHeight: '500px',
    }} >
    <Router>
      <Route path="/" index element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/shopping-cart" element={<ShoppingCart />} />
      <Route path="*" element={<NoMatch />} />
    </Router>
    </div>
  );
};

Routes.displayName = "AppRoutes";