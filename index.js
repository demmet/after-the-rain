const express = require('express');

const app = express();

app.get('/', (request, response) => {
  return response.send('After the rain! :)');
})

app.listen(3001)
