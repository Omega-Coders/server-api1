const mongoose=require("mongoose");
const connectdb=(url)=>{
    return mongoose.connect(url,{
        useNewUrlParser:true,
        //useCreateIndex:true,
        //useFindAndModify:false,
        useUnifiedTopology:false,
    })
}
module.exports=connectdb;
