const express = require("express"); //express dependencie with routes
const apiRoutes = require('./routes/apiROUT/index'); // linking the files for this file to use when running the application
const htmlRoutes = require('./routes/htmlROUT/index');


const PORT = process.env.PORT || 5505; // port 
const app = express(); // assigns app to express dependencie 

app.use(express.json()); // so that it's running in json format 
app.use(express.static('public')); // makes everything in the folder visible to this file 
app.use(express.urlencoded({ extended: true })); // encodes URLs

app.use('/api', apiRoutes); // using the code in apiRoutes and htmlRouts
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT} 🚀`); // creates a port link when you run the application
});