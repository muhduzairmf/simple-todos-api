// index.js is main Express app

const express = require('express');
// import Express 
const checkAuth = require('./middleware/checkAuth');
// import checkAuth middleware

const app = express();
// configure an Express app
app.use(express.json());
// use express.json() middleware, to parse incoming request into JSON

app.use('/api', checkAuth, require('./routes/todos'));
// configure /api routes from routes/todos.js, and use checkAuth middleware

app.get('/*', (req, res) => {
    res.status(404).json({ message: "Not Found" });
    // any route other than was stated, will be set as Not Found 
});

app.listen(4505, () => {
    console.log("Now listening on port 4505");
    // the port is 4505, and this console.log will display at terminal
});