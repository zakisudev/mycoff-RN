require('dotenv').config();
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');
const port = process.env.PORT || 4000;
const connectDB = require('./config/db');

// Create the app
const app = express();

// Connect to the database
connectDB().then(() => {
  // Start the server
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});

// Middleware
app.use(
  '/mycoff-graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
