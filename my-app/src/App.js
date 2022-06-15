import Greeting from './components/Greeting';
import Welcome from './components/Welcome';
import { Header } from './components/header';
import { Footer } from './components/footer';
// import { Home } from './pages/home'
import { Products } from './pages/products/Products';
 
import './App.css';
import { Layout } from './components/layout/Layout';

 
function App() {
  return (
    
    <Layout className="App">
      <Header />
        <Products />
      <Footer />
    </Layout>
  );
}

export default App;
