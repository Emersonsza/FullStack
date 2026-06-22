require('dotenv').config(); // Carrega as variáveis de ambiente do .env

const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;
app.use(cors());
app.use(express.json()); // Para parsear JSON no corpo das requisições
app.get('/', (req, res) => {
res.send('API está funcionando!');
});
app.listen(port, () => {
console.log(`Servidor rodando na porta ${port}`);
});