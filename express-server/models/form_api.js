const mongoose=require('mongoose');
const FormInfo=mongoose.Schema({
    NameofPublisher: {
        type: String,
        required: [true, 'Please provide name'],
        maxlength: 50,
        minlength: 3,
      },
      PublisherEmail: {
        type: String,
        required: [true, 'Please provide email'],
        match: [
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          'Please provide a valid email',
        ],
        unique: true,
      },
      NameofTemplate:{
          type:String,
          required:[true,"Please provide name of the template"],
          maxlength:50,
          minlength:3,
      },
      TypeofTemplate:{
          type:String,
          required:[true,"Please provide type of the template "],
          maxlength:50,
          minlength:3,

      }
      
});
modules.exports=mongoose.model("forminfo",FormInfo);