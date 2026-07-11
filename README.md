# Node.js JWT Authentication

Fullstack-приложение с регистрацией и авторизацией пользователей на JWT.

## 🔗 Демо
[Живая версия](https://nodejwtexpress-1.onrender.com)

> Проект на бесплатном хостинге — первый запрос после простоя может занять 30-50 секунд.

## Возможности
- Регистрация и логин с валидацией
- Хеширование паролей (bcrypt)
- Авторизация через JWT (httpOnly cookie)
- Защищённые роуты (middleware)

## Стек
- **Backend:** Node.js, Express
- **База данных:** MongoDB (Mongoose)
- **Auth:** JWT, bcrypt
- **Шаблонизатор:** EJS
- **Деплой:** Render + MongoDB Atlas

## Запуск локально

1. Клонировать репозиторий
```bash
git clone https://github.com/xFloud-ctrl/nodeexpress.git
cd nodeexpress
```

2. Установить зависимости
```bash
npm install
```

3. Создать файл `.env` в корне проекта:
JWT_SECRET=af07ab6cfe91638e9593c4afc5cc1880e7642f07d02e72938b4006e1ccae1149d6f605be933269801c09517e6d1fd2708218775582bfdd73d4d94f86365e00b9
MONGO_URI=mongodb+srv://muhagames91:camerafudjizaxis009@cluster0.lu5qcvz.mongodb.net/users?appName=Cluster0
PORT=3001
4. Запустить
```bash
npm start
```

Приложение будет доступно на `http://localhost:3001`




# Node.js JWT Authentication

Fullstack application with user registration and JWT-based authentication.

## 🔗 Live Demo
[View live app](https://nodejwtexpress-1.onrender.com)

> Hosted on a free tier — the first request after inactivity may take 30-50 seconds to respond.

## Features
- User registration and login with validation
- Password hashing with bcrypt
- JWT authentication via httpOnly cookies
- Protected routes with middleware

## Tech Stack
- **Backend:** Node.js, Express
- **Database:** MongoDB (Mongoose)
- **Auth:** JWT, bcrypt
- **Templating:** EJS
- **Deployment:** Render + MongoDB Atlas

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/xFloud-ctrl/nodeexpress.git
cd nodeexpress
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory:
JWT_SECRET=af07ab6cfe91638e9593c4afc5cc1880e7642f07d02e72938b4006e1ccae1149d6f605be933269801c09517e6d1fd2708218775582bfdd73d4d94f86365e00b9
MONGO_URI=mongodb+srv://muhagames91:camerafudjizaxis009@cluster0.lu5qcvz.mongodb.net/users?appName=Cluster0
PORT=3001

4. Run the app
```bash
npm start
```

The app will be available at `http://localhost:3001`