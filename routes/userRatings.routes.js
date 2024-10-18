const express = require("express");
const userRatingsController = require("../controller/userRatings.controller");

function userRatingsRoutes() {
    const router = express.Router();

    router.use(express.json());

    router.post("/", userRatingsController.addRatingsAndReviews);
    router.get("/:id", userRatingsController.getRatingsByBookId);
    
    

    return router;
}

module.exports = userRatingsRoutes();