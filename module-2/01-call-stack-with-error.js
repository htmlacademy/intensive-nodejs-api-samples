const a = () => {
  throw new Error('Oops');
};

const b = () => {
  a();
};

const c = () => {
  b();
};

c();
