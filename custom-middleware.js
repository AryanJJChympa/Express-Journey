import express from "express"

const app=express();

//define middleware function
const requestTimeStampLogger = (req,res,next)=>{
    const timestamp=new Date();
    console.log(`${timestamp} from ${req.method} to ${req.url}`);
    next();
}

app.use(requestTimeStampLogger)


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