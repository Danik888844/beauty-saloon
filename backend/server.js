// Импортируем необходимые модули
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

// Создаем приложение Express
const app = express();

// Настройка CORS
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Настройка соединения с базой данных MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'marigold_db'
});

// Подключение к базе данных
connection.connect((err) => {
  if (err) {
    console.error('Ошибка подключения к базе данных:', err);
    return;
  }
  console.log('Подключение к базе данных успешно установлено');
});

// Роут для обработки GET-запроса к таблице "masters"
app.get('/masters', (req, res) => {
  const sqlQuery = 'SELECT * FROM masters';
  connection.query(sqlQuery, (err, results) => {
    if (err) {
      console.error('Ошибка выполнения запроса:', err);
      res.status(500).json({ error: 'Ошибка выполнения запроса' });
      return;
    }
    res.json(results);
  });
});

app.post('/register', (req, res) => {
  console.log(req.body);
  const { fullname, number, email, password } = req.body;
  const sqlQuery = 'INSERT INTO users (fullname, number, email, password) VALUES (?, ?, ?, ?)';
  connection.query(sqlQuery, [fullname, number, email, password], (error, results) => {
    if (error) {
      console.error('Ошибка при регистрации пользователя:', error);
      res.status(500).json({ error: 'Ошибка при регистрации пользователя' });
    } else {
      res.status(200).json({ message: 'Пользователь успешно зарегистрирован' });
    }
  });
});

// Слушаем порт
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Сервер запущен на порте ${port}`);
});