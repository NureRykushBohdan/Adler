const express = require("express");
const app = express();

// Використовуємо порт, наданий DigitalOcean, або 3000 за замовчуванням
const PORT = process.env.PORT || 3000;

// Налаштування EJS
app.set("view engine", "ejs");

// Використання папки public для статичних файлів
app.use(express.static("public"));

// Маршрут для головної сторінки
app.get("/", (req, res) => {
    res.render("index", { title: "Головна сторінка" });
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`✅ Сервер працює на http://0.0.0.0:${PORT}`);
});
