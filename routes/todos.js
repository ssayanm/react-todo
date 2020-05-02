const express = require("express");
const router = express.Router();
const {
  getTodos,
  addTodo,
  deleteTodo,
} = require("../controllers/todosControllers");

router.route("/").get(getTodos).post(addTodo);

router.route("/:id").delete(deleteTodo);

// router.route("/:id").patch(markComplete);

module.exports = router;
