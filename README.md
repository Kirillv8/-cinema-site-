# 🎬 sinema-site

Добро пожаловать в **sinema-site** — веб-приложение для просмотра и поиска фильмов. Используя [TMDB API](https://www.themoviedb.org/documentation/api), приложение позволяет находить популярные и высоко оценённые фильмы, просматривать их детали, искать по названию, а также сохранять любимые фильмы. Авторизация реализована в виде мок-версии.

---

## 📸 Скриншоты

![sinema-site](public/sinema-site.png)

---

## 🚀 Функциональность

- Получение популярных фильмов с TMDB API
- Сортировка фильмов по рейтингу
- Поиск фильмов по названию
- Мок-авторизация
- Сохранение избранных фильмов
- Роутинг с помощью `react-router-dom`
- Использование контекста React для глобального состояния

---

## 🛠️ Стек технологий

- **React** + **React DOM**
- **TypeScript**
- **Vite** (в качестве сборщика)
- **Material UI (MUI)** + Emotion
- **React Router DOM**
- **Sass** (SCSS)
- **ESLint**, **Prettier** (линтинг и форматирование)
- **TMDB API** — [https://www.themoviedb.org/documentation/api](https://www.themoviedb.org/documentation/api)

---

## 📦 Установка и запуск

```bash
# Клонировать репозиторий
git clone https://github.com/Kirillv8/sinema-site.git
cd sinema-site

# Установить зависимости
npm install

# Запустить приложение в режиме разработки
npm run dev

# Создать production-сборку
npm run build

# Предпросмотр production-сборки
npm run preview

# Проверка линтинга
npm run lint
```
---

## 👨‍💻 Автор

[**Kirillv8 на GitHub**](https://github.com/Kirillv8)