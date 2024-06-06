const router = require("express").Router();
const dotenv = require("dotenv");
console.log("In todo router");

dotenv.config();

const todos = [];

router.get("/", (req, res) => {
  res.send(todos);
});

router.post("/", (req, res) => {
  const newTodo = { ...req.body };

  todos.push(newTodo);
  res.send(newTodo);
});

router.delete("/:todoId", (req, res) => {
  const { id } = req.params;

  const todoId = parseInt(id);
  const index = todos.findIndex((todo) => {
    return todo.id === todoId;
  });

  if (index === -1) {
    res
      .status(400)
      .send({ message: `Todo with id: ${todoId} does not exists` });

    return;
  } else {
    todos.splice(index, 1);
    res.send({ message: "success" });
  }
});

router.patch("/:todoId", (req, res) => {
  const { id } = req.params;
  const todoId = parseInt(id);
  const partialTodo = req.body.content;

  const index = todos.findIndex((todo) => {
    return todo.id === todoId;
  });

  if (index === -1) {
    res.status(400).send({ message: `Todo with id: ${todoId} does not exist` });
    return;
  } else {
    todos[index].content = partialTodo;
    res.send(todos[todoId]);
  }
});

module.exports = router;
