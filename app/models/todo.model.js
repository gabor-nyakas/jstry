module.exports = (sequelize, Sequelize) => {
  const Todo = sequelize.define('todo', {
    title: {
      type: Sequelize.STRING
    },
    todoText: {
      type: Sequelize.TEXT
    },
    published: {
      type: Sequelize.BOOLEAN
    },
    created: {
      type: Sequelize.DATE
    }
  });

  return Todo;
};
