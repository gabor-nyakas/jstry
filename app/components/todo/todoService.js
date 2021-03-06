import db from '../../db/index.js';
const Todo = db.todo;
//const Op = db.Sequelize.Op;

// Retrieve all Todos from the database.
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

// Create and Save a new Todo
export function create(req, res) {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: 'Content can not be empty!'
    });
    return;
  }

  // Create a Todo
  const todo = {
    title: req.body.title,
    todoText: req.body.todoText,
    published: req.body.published ? req.body.published : false,
    created: req.body.created
  };

  // Save Todo in the database
  Todo.create(todo)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Tutorial.'
      });
    });
}
