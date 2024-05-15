const express = require('express');
const app = express();
const routes = require('./routes');
const connectDB = require('./db');

// Connect to MongoDB before starting application logic
connectDB().then(() => {
  // Now it's safe to use the database

  // Middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Use routes
  app.use('/', routes);
  //app.use(router);

  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`Server listening on port ${port}`));
});
