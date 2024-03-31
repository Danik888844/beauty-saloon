// Импортируем необходимые модули
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');

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

app.post('/addBooking', (req, res) => {
  const { email, dateTime, master, services } = req.body;
  const sqlQuery = 'INSERT INTO bookings (email, dateTime, master, services) VALUES (?, ?, ?, ?)';
  connection.query(sqlQuery, [email, dateTime, master, services], (error, results) => {
    if (error) {
      console.error('Ошибка при записи:', error);
      res.status(500).json({ error: 'Ошибка при записи' });
    } else {
      res.status(200).json({ message: 'Запись успешно зарегистрирована' });
    }
  });
});

const saltRounds = 10;

app.post('/register', (req, res) => {
  const { fullname, number, email, password } = req.body;
  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.error('Ошибка хеширования пароля:', err);
      res.status(500).json({ error: 'Ошибка при регистрации пользователя' });
      return;
    }
    const sqlQuery = 'INSERT INTO users (fullname, number, email, password) VALUES (?, ?, ?, ?)';
    connection.query(sqlQuery, [fullname, number, email, hash], (error, results) => {
      if (error) {
        console.error('Ошибка при регистрации пользователя:', error);
        res.status(500).json({ error: 'Ошибка при регистрации пользователя' });
      } else {
        res.status(200).json({ message: 'Пользователь успешно зарегистрирован' });
      }
    });
  });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const sqlQuery = 'SELECT * FROM users WHERE email = ?';
  connection.query(sqlQuery, [email], (error, results) => {
    if (error) {
      console.error('Ошибка при поиске пользователя:', error);
      res.status(500).json({ error: 'Ошибка при попытке входа' });
      return;
    }
    if (results.length === 0) {
      res.status(401).json({ error: 'Пользователь с таким email не найден' });
      return;
    }
    const user = results[0];
    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        console.error('Ошибка при сравнении паролей:', err);
        res.status(500).json({ error: 'Ошибка при попытке входа' });
        return;
      }
      if (result) {
        res.status(200).json({ message: 'Успешный вход', user: user });
      } else {
        res.status(401).json({ error: 'Неверный пароль' });
      }
    });
  });
});

// Слушаем порт
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Сервер запущен на порте ${port}`);
});