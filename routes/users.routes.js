const express = require("express");
const userController = require("../controller/users.controller");

function UserRoutes() {
    const router = express.Router();

    router.use(express.json());

    router.post("/", userController.registerUser);
    router.post("/", userController.loginUser);

    return router;
}

module.exports = UserRoutes();