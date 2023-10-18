const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors'); // Importe o pacote 'cors'

// Configurar as opções CORS (substitua '*' pelo domínio apropriado em produção)
const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST'],
};

app.use(cors(corsOptions)); // Use o middleware 'cors'

const dbConfig = {
  host: 'cluster.cdxnv8oe5mq3.sa-east-1.rds.amazonaws.com',
  user: 'admin',
  password: 'easyprogefoda',
  database: 'easyprog',
};

const connection = mysql.createConnection(dbConfig);

app.use(express.json());

app.post('/inserir-dados', (req, res) => {
  const { inputText } = req.body;

  const sql = 'INSERT INTO codeuncorrected (incorrectedcode) VALUES (?)';
  
  connection.query(sql, [inputText], (error, results) => {
    if (error) {
      console.error('Erro ao inserir dados no banco de dados:', error);
      res.status(500).send('Erro ao inserir dados');
    } else {
      console.log('Dados inseridos com sucesso');
      res.status(200).send('Dados inseridos com sucesso');
    }
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
