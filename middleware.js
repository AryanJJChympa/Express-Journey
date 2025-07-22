import express from "express"

const app=express();

//define middleware function
const myFirstMidlleware = (req,res,next)=>{
    console.log('This first middleware will run on every request');
    next();
}

app.use(myFirstMidlleware);

app.get('/', (req,res)=>{
    res.send('home page');
})

app.get('/about', (req,res)=>{
    res.send('about page');
})

const port=3000;
app.listen(port, ()=>{
    console.log(`Server is live on port:${port}`);
})