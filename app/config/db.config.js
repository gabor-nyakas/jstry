module.exports = {
  HOST: process.env.MVC_APP_DB_HOST,
  USER: process.env.MVC_APP_DB_USER,
  PASSWORD: process.env.MVC_APP_DB_PWD,
  DB: process.env.MVC_APP_DB_NAME,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
