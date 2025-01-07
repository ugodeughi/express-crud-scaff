const express = require('express');
const elementsRouter = require('./routers/elements');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Entry point');
})

app.use('/elements', elementsRouter);


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})