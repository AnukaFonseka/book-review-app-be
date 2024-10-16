const express = require('express')
const bookController = require('../controller/books.controller')

function bookRoutes() {
    const router = express.Router()

    router.use(express.json());

    router.post("/", bookController.addBook);
    router.get("/", bookController.getAllBooks);
    router.put("/:id", bookController.updateBook);
    router.get("/:id", bookController.getBookById);
    router.delete("/:id", bookController.deleteBookById);


    return router;
}

module.exports = bookRoutes();