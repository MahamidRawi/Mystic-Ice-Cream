import React, { useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataThree, productDataTwo } from './components/Products/data';
import Footer from './components/Footer';

function App() {
  const productsRef = useRef(null);

  const scrollToProducts = () => {
    productsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Router>
      <GlobalStyle />
      <Hero scrollToProducts={scrollToProducts} />
      <div ref={productsRef}>
        <Products heading='Ice Cream' data={productData} />
      </div>
      <Products heading='Delice Glace' data={productDataTwo} />
      <Products heading='Extras' data={productDataThree} />
      <Footer />
    </Router>
  );
}

export default App;
