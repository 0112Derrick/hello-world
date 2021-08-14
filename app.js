import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello');

})
console.log('running')
app.listen(8080);