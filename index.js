const express = require('express');
const app = express();
const PORT = 3000;

// Middleware do parsowania JSON
app.use(express.json());

// Strona główna
app.get('/', (req, res) => {
  res.send('<h1>Witamy na stronie Express!</h1>');
});

// Prosty API endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Witaj ze świata Express!' });
});

// Endpoint POST do przyjmowania danych
app.post('/api/data', (req, res) => {
  const { name, age } = req.body;
  res.json({ received: { name, age } });
});

// Start serwera
app.listen(PORT, () => {
  console.log(`Serwer działa na http://localhost:${PORT}`);
});
