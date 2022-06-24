const express = require('express');

const cropperRouter = require('./routes/cropper.router');

const cors = require('cors')

const app = express();

// const loginRouter = require('./routes/login.router');

app.use(cors({
    origin : 'http://localhost:3000', // whitelist of accepted clients
}));

// app.use(express.json()); //middleware


// module.exports = app;
// app.use(loginRouter);
require('express-async-errors');
// intialising errors

//importing routes
const formsRouter=require("./routes/form.router")
const authRouter=require("./routes/auth_router")
const authenticateUser = require('./middlewares/authentication');
//importing errors
//const errorhandler=require("./middlewares/error-handler");
//using routes 
var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use('/api/v1/forms',formsRouter);
app.use('/api/v1/auth',authRouter);
//using errors
//app.use(errorhandler)
//connecting port


app.use(cropperRouter);
module.exports = app;