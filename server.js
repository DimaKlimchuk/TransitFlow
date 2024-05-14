const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();

// Вказуємо Express використовувати папку 'public' для статичних файлів
app.use(express.static("public"));
app.use(bodyParser.json());

// Стартовий маршрут ('/') буде автоматично відображати index.html
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/Home.html");
});

// Маршрут для сторінки "Про нас"
app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/public/About.html");
});

// Маршрут для сторінки "Послуги"
app.get("/services", (req, res) => {
  res.sendFile(__dirname + "/public/Services.html");
});

// Маршрут для сторінки "Команда"
app.get("/team", (req, res) => {
  res.sendFile(__dirname + "/public/Team.html");
});

// Маршрут для сторінки "Контакти"
app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/public/Contact.html");
});

// Обробник маршруту 404
app.use((req, res) => {
  res.status(404).sendFile(__dirname + "/public/404.html");
});

// Стартуємо сервер
app.listen(3000, () => {
  console.log("Сервер стартував на порті 3000!");
});
