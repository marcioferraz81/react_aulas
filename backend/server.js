const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'sql10.freesqldatabase.com',
  user: 'sql10786431',
  password: 'jheuP1drv4', // substitua se tiver senha
  database: 'sql10786431', // coloque o nome correto do banco
});

app.get('/api/usuarios', (req, res) => {
  const nome = req.query.nome || '';
  db.query(
    'SELECT * FROM usuarios WHERE nome LIKE ?',
    [`%${nome}%`],
    (err, results) => {
      if (err) return res.status(500).json({ erro: err });
      res.json(results);
    }
  );
});

app.listen(port, () => console.log(`API rodando em http://localhost:${port}`));
