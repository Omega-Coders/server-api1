const formapi=  require('../models/form_api');
const{StatusCodes}=require("http-status-codes");
const {BadRequestError,NotFoundError}=require("../errors");
// const create=async(req,res)=>{
//     await formapi.create({NameofPublisher:"hello", PublisherEmail:"sundar@gmail.com",
//     NameofTemplate:"midtemplate",TypeofTemplate:"mid paper"}),res.send("helloworld");
    
// }
const createform =async(req,res)=>{
    //req.body.createdBy = req.user.userId
       const task= await formapi.create(req.body)
       
        res.status(StatusCodes.CREATED).json(task);
        
    }
const getallforminfo =(req,res)=>{
    res.send("getallforminfo");
    }
    const getforminfo =(req,res)=>{
        res.send("getforminfo");
        }
module.exports={createform,getallforminfo,getforminfo};