import React from 'react'
import './App.scss';
import ProductList from './components/product-list/ProductList';
import Footer from './components/shared/footer/Footer';
import AsideBar from './components/shared/aside-bar/AsideBar';

function App() {
  return (
    <div className="App">
        <AsideBar/>
        <h1>Proyecto aerolab</h1>

        <ProductList/>
        <Footer/>
    </div>
  );
}

export default App;
