const express = require("express");
const bookController = require("../controllers/bookController");

const router = express.Router();

// Read or get book(s)
router
  .route("/")
  .get(bookController.getAllBooks)
  .post(bookController.createBook);

// Read with id, update and delete
router
  .route("/:id")
  .get(bookController.getBook)
  .patch(bookController.updateBook)
  .delete(bookController.deleteBook);

module.exports = router;