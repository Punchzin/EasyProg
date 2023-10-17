const express = require('express');
const app = express();
const { exec } = require('child_process');

app.post('/executar-comando', (req, res) => {
  // Execute o comando desejado no terminal
  exec('cd API', (error, stdout, stderr) => {
    if (error) {
      console.error(`Erro ao executar o comando: ${error}`);
      res.status(500).send('Erro ao executar o comando');
      return;
    }
    exec('python3 main.py', (error, stdout, stderr) => {
      if (error){
        console.error(`Erro ao executar api: ${error}`);
        res.status(500).send('Erro ao executar o comando');
        return;
      }
    })
    console.log(`Comando executado: ${stdout}`);
    res.status(200).send('Comando executado com sucesso');
  });
});

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
