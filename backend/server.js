import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import Product from "./models/Product.js"
import connectDb from "./config/dbConfig.js";


const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));


// Pas besoin de redéclarer ProductSchema et Product ici

// Routes
app.get('/products', async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

app.post('/products', async (req, res) => {
    const products = new Product(req.body);
    
    await products.save();
    res.status(201).json(products);
});


connectDb();
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});

