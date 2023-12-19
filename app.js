require('dotenv').config();
const express = require('express');
const productRouter = require('./routes/product')
const app = express();
const connectDB=require('./db/connect')
const PORT = process.env.PORT || 5000;
app.get('/',(req,res)=>{
    res.send('hi boy');
});
app.use('/api/products',productRouter)
const start = async()=>{
try{
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT,()=>{
        console.log("Server is running on PORT",PORT);
    })
}catch(error){
console.log(error,'something goes wrong in server');
}
}
start();