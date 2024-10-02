import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [expirationDate, setExpirationDate] = useState('');
    const [prix, setPrix] = useState(0);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null); // Réinitialiser l'erreur
        setSuccess(false); // Réinitialiser le succès

        try {
            await axios.post('http://localhost:3000/products', { name, quantity, expirationDate, prix });
            setSuccess(true);
            setName('');
            setQuantity(0);
            setExpirationDate('');
            setPrix(0);
        } catch (err) {
            console.error("Détails de l'erreur :", err.response ? err.response.data : err.message);
            setError('Erreur lors de l\'ajout du produit');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Ajouter un Produit</h2>
            <label>Nom du produit :</label>
            <input
                type="text"
                placeholder="Nom"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <label>Quantité :</label>
            <input
                type="number"
                placeholder="Quantité"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required
            />
            <label>Date d'expiration :</label>
            <input
                type="date"
                value={expirationDate}
                onChange={(e) => setExpirationDate(e.target.value)}
                required
            />
            <label>Prix d'achat :</label>
            <input
                type="number"
                placeholder="Prix"
                value={prix}
                onChange={(e) => setPrix(e.target.value)}
                required
            />
            <button type="submit">Ajouter</button>

            {success && <p style={{ color: 'green' }}>Produit ajouté avec succès !</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    
    );
    
};


export default AddProduct;
