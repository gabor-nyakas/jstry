import db from './index.js';
const Todo = db.todo;
//const Op = db.Sequelize.Op;

// Retrieve all Tutorials from the database.
export function findAll(req, res) {
  //const title = req.query.title;
  //var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Todo.findAll(/*{ where: condition }*/)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving tutorials.'
      });
    });
}
