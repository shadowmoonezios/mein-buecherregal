const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// MongoDB Verbindung
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/mein-buecherregal', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(() => {
  console.log('MongoDB verbunden');
}).catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Willkommen bei Mein Bücherregal!');
});

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});