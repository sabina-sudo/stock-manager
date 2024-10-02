import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    
    

    

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get('http://localhost:3000/products');
                console.log(res.data); // Vérifiez la structure
                setProducts(res.data);
            } catch (err) {
                console.error("Erreur lors de la récupération des produits :", err);
                setError(err.response ? err.response.data : "Erreur lors de la récupération des produits");
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    if (loading) {
        return <div>Chargement des produits...</div>;
    }

    if (error) {
        return <div style={{ color: 'red' }}>{error}</div>;
    }

    return (
        <div>

            <a href='/ProductList'><h2>Liste des Produits</h2></a>
            {products.length === 0 ? (
                <p>Aucun produit disponible.</p>
            ) : (
                <ul>
                    {products.map(product => (
                        <li key={product._id} style={{ color: new Date(product.expirationDate).getTime() <= Date.now() ? 'red' : 'inherit' } && { color: (product.quantity) <= 12 ? 'red' : 'inherit' }}  >
                        {product.name} - {product.quantity == 12 ? (`La quantité de ${product.name} est expirée : Appeler le Fournisseur` ):`${product.quantity} Unités` } - 
                        {new Date(product.expirationDate).getTime() <= Date.now() ? (
                            ` la date de ${product.name} est expirée`
                        ) : (
                            <span> (Expire le : {new Date(product.expirationDate).toLocaleDateString()})</span>
                        )} - 
                        {product.prix !== undefined && product.prix !== null ? (
                            ` Le prix d'achat est ${product.prix.toLocaleString()} dinars`
                        ) : (
                            'Prix non disponible'
                        )}
                    </li>
                    
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ProductList;
