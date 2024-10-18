const express = require("express");
const userRatingsController = require("../controller/userRatings.controller");

function userRatingsRoutes() {
    const router = express.Router();

    router.use(express.json());

    router.post("/", userRatingsController.addRatingsAndReviews);
    router.get("/:id", userRatingsController.getRatingsByBookId);
    router.get("/books/:bookId/users/:userId", userRatingsController.getUserRatingForBook);
    router.put("/books/:bookId/users/:userId", userRatingsController.editUserRatingForBook);
    router.delete("/books/:bookId/users/:userId", userRatingsController.deleteUserRatingForBook);
    

    return router;
}

module.exports = userRatingsRoutes();