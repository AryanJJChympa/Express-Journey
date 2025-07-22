import express from "express";
import path from "node:path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app=express();

//set the view engine as ejs

app.set('view engine', 'ejs');

//set the directory for the views 
app.set('views', path.join(__dirname, 'views'));
const products = [
    {
        id:1,
        title:'Product1'
    },
    {
        id:2,
        title:'Product2'
    },
    {
        id:3,
        title:'Product3'
    },
];

app.get('/', (req,res)=>{
    res.render('home', {title:'Home', products:products})
})

app.get('/about', (req,res)=>{
    res.render('about', {title:'About page'})
})

const port =3000;

app.listen(port, ()=>{
    console.log(`Server is live on port: ${port}`);
    
})