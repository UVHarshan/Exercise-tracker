const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

// Assiging a port for the server
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

///////////////////////////
// Database part
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// Importing and using the routes
const exercisesRouter = require('./routes/exercise')
const usersRouter = require('./routes/user')

app.use('/users', usersRouter);
app.use('/exercises', exercisesRouter);



// Starting the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});