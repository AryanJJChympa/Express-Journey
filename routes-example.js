import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to our home page');
})
app.get('/products', (req, res) => {
    const products = [
        {
            productId: 1,
            productCount: 10
        },
        {
            productId: 2,
            productCount: 20
        },
        {
            productId: 3,
            productCount: 15
        }
    ]
    res.json(products);
})

//get a single product (real life scenario)
app.get('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const products = [
        {
            id: 1,
            productCount: 10
        },
        {
            id: 2,
            productCount: 20
        },
        {
            id: 3,
            productCount: 15
        }
    ];

    const getSingleProduct = products.find(product => product.id === productId);

    if (getSingleProduct) {
        res.json(getSingleProduct);
    } else {
        res.status(404).send('Product is not found please try with different id');
    }
})



const port = 3000;
app.listen(port, () => {
    console.log(`Server is live on port: ${port}`);
})