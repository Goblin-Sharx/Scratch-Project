const express = require('express'); // import node framework
const mongoose = require('mongoose'); // imports the mongoose library
require("dotenv").config() //env varible that has the data
// import routers
const bioRouter = require('./routes/bioRouter.js'); 
// const tracksRouter = requite('./route/tracksRouter.js'); 
const app = express(); // create a instance of express 

app.use(express.urlencoded({ extended: true }));// default check 
app.use(express.json()); // ensure that we can use a body went doing post request

const PORT = 3001;
const uri = process.env.MONGODB_CONNECTION_STRING; // mongoDB uri with artist per location 

mongoose.connect(uri, { 
    useNewUrlParser: true,
    useUnifiedTopology: true 
}).then(() => console.log('mongoose connected')).catch((err) => console.log('mongoose.connect or uri ->', err)); // invoke the connect method to connect to the data base

const connection = mongoose.connection; // connect to library imported in line 2

app.use('/bio', bioRouter);//switched to api
app.use('/tracks', tracksRouter);


connection.once('open', () => { //invoke the cb one time when the connection is made
    console.log('MongoDB database connected');
});

// Unknown route handler
app.use((req, res) => res.sendStatus(404));

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  console.log("err", err);
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`Server App Listening at http://localhost${PORT}`));



