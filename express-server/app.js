const express = require('express');

const cropperRouter = require('./routes/cropper.router');

const cors = require('cors')

const app = express();
app.use(express.json());
// const loginRouter = require('./routes/login.router');

app.use(cors({
    origin : 'http://localhost:3000', // whitelist of accepted clients
}));

// app.use(express.json()); //middleware


// module.exports = app;

app.use(cropperRouter);
module.exports = app;