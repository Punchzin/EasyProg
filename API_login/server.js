const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const db = mysql.createConnection('mysql://a1q5daxmfcor6w5eyibq:pscale_pw_aJneHS4TiyGKJxW33gbZR9mMO16FrUxTnIQAQl2pKNb@aws.connect.psdb.cloud/bank_of_dades?ssl={"rejectUnauthorized":true}');

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL.');
});

// Rota para login
app.post('/login', (req, res) => {
  const { email, senha } = req.body;
  db.query('SELECT * FROM usuarios WHERE email = ? AND senha = ?', [email, senha], (err, result) => {
    if (err) {
      console.error('Erro ao efetuar o login:', err);
      res.status(500).json({ error: 'Erro interno do servidor' });
    } else if (result.length === 0) {
      res.status(401).json({ message: 'Credenciais inválidas' });
    } else {
      res.status(200).json({ message: 'Login bem-sucedido' });
    }
  });
});

// Rota para registro de usuários
app.post('/register', (req, res) => {
  const { email, senha, confirmarSenha } = req.body;
  if (senha !== confirmarSenha) {
    res.status(400).json({ message: 'As senhas não coincidem' });
    return;
  }
  db.query('INSERT INTO usuarios (email, senha) VALUES (?, ?)', [email, senha], (err, result) => {
    if (err) {
      console.error('Erro ao registrar o usuário:', err);
      res.status(500).json({ error: 'Erro interno do servidor' });
    } else {
      res.status(200).json({ message: 'Usuário registrado com sucesso' });
    }
  });
});

const port = 3000;
app.listen(port, () => {
  console.log('Servidor rodando na porta', port);
});