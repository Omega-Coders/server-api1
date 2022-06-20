const mangoose =require("mongoose");

const connectdb=(url)=>{
    return mangoose.connect(url,{
        useNewUrlParser:true,
        // useCreateIndex:true,
        // useFindAndModify:false,
        useUnifiedTopology:false,

    })
}
module.exports=connectdb;
