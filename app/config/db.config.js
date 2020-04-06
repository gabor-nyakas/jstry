export const HOST = process.env.MVC_APP_DB_HOST;
export const USER = process.env.MVC_APP_DB_USER;
export const PASSWORD = process.env.MVC_APP_DB_PWD;
export const DB = process.env.MVC_APP_DB_NAME;
export const dialect = 'mysql';
export const pool = {
  max: 5,
  min: 0,
  acquire: 30000,
  idle: 10000
};
