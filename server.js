const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes');

// Initialize app, create port
const app = express();
const PORT = process.env.PORT || 3001;

// import our routes
app.use(express.json()); // boilerplate
app.use(express.urlencoded({ extended: true})); // boilerplate
app.use(express.static('public')); // boilerplate

app.use('/', htmlRoutes);

// Starting server on PORT
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
