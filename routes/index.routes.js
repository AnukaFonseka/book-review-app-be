const express = require('express');
const bookRoutes = require('./books.routes');

function routes() {
    const router = express.Router();

    router.use("/books", bookRoutes);

    return router;
}

module.exports = routes();