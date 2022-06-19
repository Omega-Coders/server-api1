
const http = require('http');


const app = require('./app');


const PORT = process.env.PORT || 8000; // Taking Environmental varibles same like taking command line args (process.arg)


const server = http.createServer(app);


server.listen(PORT, ()=> {
    console.log(`listening to ${PORT}`);
})

/////// Reason for seperate for express and node http
// testing the API in-process without having to perform the network calls
// Faster testing execution
// Getting wider coverage metrics of the code
// Allows deploying the same API under flexible and different network conditions
// Better separation of concerns and cleaner code