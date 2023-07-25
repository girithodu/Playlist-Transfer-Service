require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(express.json());
app.use(morgan('dev'));
const PORT = process.env.SERVER_PORT || 3000;
app.get ("/", (req,res) => {
  res.send('hello world');
})
app.listen(PORT);
console.log(`Server Listening on http://localhost:${PORT}`);