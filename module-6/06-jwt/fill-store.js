import storeService from './services/store-service.js';

(async () => {
  await storeService.add('user@web.com', '123456');
  console.log('Добавлен тестовый пользователь user@web.com');
})();
