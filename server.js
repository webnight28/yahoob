const express = require('express');
const db = require('./db'); // Import the database connection module
const dbu = require('./dbu'); 
const ejs = require('ejs');
const indexRouter = require('./routes/index');
const loadRouter = require('./routes/load');
const homeRouter = require('./routes/home');
const reqRouter = require('./routes/req');
const beepRouter = require('./routes/beep');
const audioRouter = require('./routes/audio');
const codeloadRouter = require('./routes/codeload');
const backendRouter = require('./routes/backend');


const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Middleware to pass the database connection to every route
app.use((req, res, next) => {
  req.db = db; 
  req.dbu = dbu; // Attach the database connection to the request object
  next();
});


// Define a route to run index page automode on 
app.use(express.urlencoded({ extended: true }));
app.use('/',indexRouter);
app.use('/load',loadRouter );
app.use('/home',homeRouter );
app.use('/req',reqRouter );
app.use('/beep',beepRouter );
app.use('/audio',audioRouter);
app.use('/codeload',codeloadRouter);
app.use('/backend',backendRouter);






// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
