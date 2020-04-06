export default (sequelize, Sequelize) => {
  const Todo = sequelize.define(
    'Todo',
    {
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
    },
    { timestamps: false, freezeTableName: true /* version: true*/ }
  );

  return Todo;
};
