

import Greeting from './components/Greeting';
import Welcome from './components/Welcome';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { CartProvider } from './provider/CartProvider';
import { Routes } from './Routes';

import './App.css';
import { Layout } from './components/layout/Layout';


function App() {
  return (
    <CartProvider>
      <Layout className="App">
        <Header />
          <Routes/>
        <Footer />
      </Layout>
    </CartProvider>
  );
}

export default App;
