module.exports = {
  HOST: process.env.MVC_APP_HOST,
  USER: 'root',
  PASSWORD: '123456',
  DB: 'testdb',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
