const express = require('express');
const bookRoutes = require('./books.routes');
const userRoutes = require('./users.routes');

function routes() {
    const router = express.Router();

    router.use("/books", bookRoutes);
    router.use("/users",userRoutes);

    return router;
}

module.exports = routes();