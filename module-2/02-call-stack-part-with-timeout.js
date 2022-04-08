const getBasicTodo = () => {
  return [
    'Проснуться',
    'Позавтракать',
    'Почитать книгу',
    'Узнать, как работает JavaScript',
    'Отдохнуть',
  ];
};

const main = () => {
  const todos = getBasicTodo();

  setTimeout(() => {
    console.log(todos);
  }, 0);

  console.log('Список дел:');
};

main();
