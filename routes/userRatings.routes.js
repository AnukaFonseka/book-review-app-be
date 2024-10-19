const express = require("express");
const userRatingsController = require("../controller/userRatings.controller");

function userRatingsRoutes() {
    const router = express.Router();

    router.use(express.json());

    router.post("/", userRatingsController.addRatingsAndReviews);
    router.get("/:id", userRatingsController.getRatingsByBookId);
    router.get("/avgrating/:bookId", userRatingsController.getAverageRating);
    router.get("/:bookId/:userId", userRatingsController.getUserRatingForBook);
    router.put("/:bookId/:userId", userRatingsController.editUserRatingForBook);
    router.delete("/:bookId/:userId", userRatingsController.deleteUserRatingForBook);

    

    return router;
}

module.exports = userRatingsRoutes();