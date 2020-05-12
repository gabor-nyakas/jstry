import { DB, USER, PASSWORD, HOST, dialect as _dialect, pool as _pool } from '../config/db.config.js';
import Sequelize from 'sequelize';
import todoModel from '../components/todo/todoModel.js';

const dbConnection = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  dialect: _dialect,
  operatorsAliases: 0,

  pool: {
    max: _pool.max,
    min: _pool.min,
    acquire: _pool.acquire,
    idle: _pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = dbConnection;

db.todo = todoModel(dbConnection, Sequelize);

export default db;
