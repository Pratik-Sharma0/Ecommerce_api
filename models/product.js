const mongoose=require('mongoose');
const productSchema=new mongoose.Schema({
    product_id:{
       type:Number,
       required:true
    },
    product_name:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    quantity: {
        type:Number,

    },
    description:{
        type:String,
        required:true
    },
    rating: {
        type:Number
    },
    availability:{
        type:Boolean,
        required:true
    },
    shipping:{
        type:Boolean,
        
    },
    image:{
        type:String
    }
})

module.exports=mongoose.model("Product",productSchema);