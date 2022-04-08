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
  console.log(todos);
};

main();
