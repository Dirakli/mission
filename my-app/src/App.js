import Greeting from './components/Greeting';
import Welcome from './components/Welcome';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { CartProvider } from './provider/CartProvider';
// import { Home } from './pages/home'
import { Products } from './pages/products/Products';

import './App.css';
import { Layout } from './components/layout/Layout';

function App() {
  return (
    <CartProvider>
    <Layout className="App">
      <Header />
      <Products />
      <Footer />
    </Layout>
    </CartProvider>
  );
}

export default App;
