const express = require("express");
const router = express.Router();
const {
  getTodos,
  addTodo,
  deleteTodo,
  markComplete,
} = require("../controllers/todosControllers");

router.route("/").get(getTodos).post(addTodo);

router.route("/:id").delete(deleteTodo);

// router.route("/:id").put(deleteTodo);

router.route("/:id").patch(markComplete);

module.exports = router;
