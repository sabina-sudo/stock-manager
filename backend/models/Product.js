import mongoose from "mongoose";

// Définition du schéma pour le produit
const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // Le nom est requis
        index: true
    },
    quantity: {
        type: Number,
        required: true, // La quantité est requise
        min: 0 // La quantité ne peut pas être négative
    },
    expirationDate: {
        type: Date,
        required: true // La date d'expiration est requise
    },
    prix: {
        type: Number,
        required: true,
        min: 0,
        
    }
});

// Création du modèle à partir du schéma
const Product = mongoose.model('Product', ProductSchema);



// Exportation du modèle
export default Product;
