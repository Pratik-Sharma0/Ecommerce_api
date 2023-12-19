const Product = require('../models/product')
const getAllProducts = async(req,res)=>{
const {category,product_name,sort}=req.query;
const queryObject={};
if(category){
    queryObject.category=category;
}
if(product_name){
    queryObject.product_name={$regex:product_name,$options:'i'}
}
let apiData=Product.find(queryObject);
if(sort){
    let sortFix=sort.replace(',',' ');
    apiData = apiData.sort(sortFix);
}
const mydata = await apiData.sort(sort);
res.status(200).json({mydata})
};
module.exports=getAllProducts