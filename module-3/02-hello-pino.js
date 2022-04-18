import pino from 'pino';

// Создаём экземпляр объекта Pino
const logger = pino();

// Фиксируем события на разных уровнях
logger.info('Hello, world!');
logger.warn('Test warning');
logger.error('Add error');
