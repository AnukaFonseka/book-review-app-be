const express = require('express')
const bookController = require('../controller/books.controller')

function bookRoutes() {
    const router = express.Router()

    router.use(express.json());

    router.post("/", bookController.addBook);

    return router;
}

module.exports = bookRoutes();