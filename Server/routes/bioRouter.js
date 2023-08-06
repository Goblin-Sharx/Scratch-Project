const express = require("express");
const bioController = require('../controllers/bioController.js'); // for middleware use

const bioRouter = express.Router(); // create router functionality

bioRouter.get("/api/bio", bioController.getBio, (req, res) => {
    console.log('---> In bioRouter'); 
    return res.status(200).json(res.locals.bio);
});

module.exports = bioRouter;

