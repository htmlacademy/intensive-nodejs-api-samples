## Node.js. Профессиональная разработка REST API

Репозиторий для примеров учебника курса «Node.js. Профессиональная разработка REST API».

### Список модулей курса:

  - [Модуль 1](https://github.com/htmlacademy/intensive-nodejs-api-samples) - Примеры 1-го модуля.
  - [Модуль 2](https://github.com/htmlacademy/intensive-nodejs-api-samples/tree/module-2) - Примеры 2-го модуля.
  - [Модуль 3](https://github.com/htmlacademy/intensive-nodejs-api-samples/tree/module-3) - Примеры 3-го модуля.
  - [Модуль 4](https://github.com/htmlacademy/intensive-nodejs-api-samples/tree/module-4) - Примеры 4-го модуля.
  - [Модуль 5](https://github.com/htmlacademy/intensive-nodejs-api-samples/tree/module-5) - Примеры 5-го модуля.
  - [Модуль 6](https://github.com/htmlacademy/intensive-nodejs-api-samples/tree/module-6) - Примеры 6-го модуля.
  - [Модуль 7](https://github.com/htmlacademy/intensive-nodejs-api-samples/tree/module-7) - Примеры 7-го модуля.
  - [Модуль 8](https://github.com/htmlacademy/intensive-nodejs-api-samples/tree/module-8) - Примеры 8-го модуля.

### Модуль 6

#### Глава 2

- [02-session](https://github.com/htmlacademy/intensive-nodejs-api-samples/blob/module-6/module-6/02-session.js) - Модуль инициализации сервера с подсчетом количества посещений пользователя

#### Глава 4

- [app](https://github.com/htmlacademy/intensive-nodejs-api-samples/blob/module-6/module-6/04-simple-auth/app.js) - Точка входа приложения «Аутентификация на основе сессий»
- [constants](https://github.com/htmlacademy/intensive-nodejs-api-samples/blob/module-6/module-6/04-simple-auth/constants.js) - Модуль, содержащий описание всех необходимых констант для работы приложения
- [store](https://github.com/htmlacademy/intensive-nodejs-api-samples/blob/module-6/module-6/04-simple-auth/store.js) - Модуль, имитирующий хранилище данных
- [routes/app-router](https://github.com/htmlacademy/intensive-nodejs-api-samples/blob/module-6/module-6/04-simple-auth/routes/app-router.js) - Модуль инициализации маршрутов приложения
- [middleware/](https://github.com/htmlacademy/intensive-nodejs-api-samples/blob/module-6/module-6/04-simple-auth/middleware) - Директория, хранящая промежуточные обработчики для решения вопросов валидации
- [schemas/](https://github.com/htmlacademy/intensive-nodejs-api-samples/blob/module-6/module-6/04-simple-auth/schemas) - Директория, хранящая схемы валидации для Joi
- [views/](https://github.com/htmlacademy/intensive-nodejs-api-samples/blob/module-6/module-6/04-simple-auth/views) - Директория, хранящая шаблоны для регистрационной формы, формы входа и приватной страницы

#### Глава 6

- [test-jwt.http](https://github.com/htmlacademy/intensive-nodejs-api-samples/blob/module-6/module-6/06-jwt/test-jwt.http) - Примеры запросов к приложению «JWT на практике»
- [app](https://github.com/htmlacademy/intensive-nodejs-api-samples/blob/module-6/module-6/06-jwt/app.js) - Точка входа приложения «JWT на практике»
- [constants](https://github.com/htmlacademy/intensive-nodejs-api-samples/blob/module-6/module-6/06-jwt/constants.js) - Модуль, содержащий описание всех необходимых констант для работы приложения
- [fill-store](https://github.com/htmlacademy/intensive-nodejs-api-samples/blob/module-6/module-6/06-jwt/fill-store.js) - Модуль добавления информации о пользователе в хранилище
- [jwt-helper](https://github.com/htmlacademy/intensive-nodejs-api-samples/blob/module-6/module-6/06-jwt/jwt-helper.js) - Модуль генерации JWT токенов
- [services/store-service](https://github.com/htmlacademy/intensive-nodejs-api-samples/blob/module-6/module-6/06-jwt/services/store-service.js) - Модуль, реализующий механизм хранения информации о пользователях
- [services/refresh-token-service](https://github.com/htmlacademy/intensive-nodejs-api-samples/blob/module-6/module-6/06-jwt/services/refresh-token-service.js) - Модуль хранения токенов обновления
- [middlewares/authenticate](https://github.com/htmlacademy/intensive-nodejs-api-samples/blob/module-6/module-6/06-jwt/middlewares/authenticate.js) - Модуль проверки учётных данных пользователя
- [middlewares/authenticate-jwt](https://github.com/htmlacademy/intensive-nodejs-api-samples/blob/module-6/module-6/06-jwt/middlewares/authenticate-jwt.js) - Модуль проверки аутентификации и токена
- [routes/user-router](https://github.com/htmlacademy/intensive-nodejs-api-samples/blob/module-6/module-6/06-jwt/routes/user-router.js) - Модуль, описывающий маршруты `/login`, `/refresh` и `/logout`
- [routes/books-router.js](https://github.com/htmlacademy/intensive-nodejs-api-samples/blob/module-6/module-6/06-jwt/routes/books-router.js) - Модуль, описывающий приватный маршрут
