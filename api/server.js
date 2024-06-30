// api/index.js
const express = require('express');
const app = express();
const port = 3000; // Vous pouvez choisir un autre port si vous le souhaitez

app.get('/', (req, res) => {
  res.send('Hello, the server is fonctionnal!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
