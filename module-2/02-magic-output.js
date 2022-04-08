import fs from 'fs';
import {fileURLToPath} from 'url';

const TIMEOUT = 1000;
const filename = fileURLToPath(import.meta.url);

console.log('Привет мир!');

setTimeout(() => console.log('Привет, из setTimeout'), TIMEOUT);

setTimeout(() => console.log('Привет из setTimeout (0)'), 0);

setImmediate(() => console.log('Привет из setImmediate'));

process.nextTick(() => console.log('Привет, из nextTick'));

fs.readFileSync(filename);
console.log('Контент прочитан синхронно.');

fs.readFile(filename, () => console.log('Контент прочитан асинхронно.'));

new Promise((resolve) => resolve('Привет, из промиса'))
  .then(console.log);

console.log('Конец');
