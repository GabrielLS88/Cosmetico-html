const express = require('express');
const env = require('dotenv')
const path = require('path');
const app = express();

env.config();

const PORT = process.env.PORT;

app.use(express.static(path.join(__dirname, 'public')));

// Servir o HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
