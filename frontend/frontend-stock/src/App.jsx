import React from 'react';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import '../public/style.css';

const App = () => {
    return (
        <div >
            <h1>Gestionnaire de Stock Alimentaire</h1>
            <div className="container">
                <div className="add-product">
                    <AddProduct />
                </div>
                <div className="product-list">
                    <ProductList />
                </div>
            </div>
        </div>
    );
};

export default App;
