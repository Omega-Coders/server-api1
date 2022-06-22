// const express = require('express');

// const cors = require('cors')

// const app = express();

// const loginRouter = require('./routes/login.router');

// app.use(cors({
//     origin : 'http://localhost:3000', // whitelist of accepted clients
// }));
// app.use(express.json()); //middleware
// app.use(loginRouter);
require('express-async-errors');
// intialising errors
const express =require("express");
const app =express();
//importing routes
const formsRouter=require("./routes/form.router")
const authRouter=require("./routes/auth_router")
const authenticateUser = require('./middlewares/authentication');
//importing errors
//const errorhandler=require("./middlewares/error-handler");
//using routes 
app.use(express.json())
app.use('/api/v1/forms',formsRouter);
app.use('/api/v1/auth',authRouter);
//using errors
//app.use(errorhandler)
//connecting port
const port =8000;
module.exports = app;

