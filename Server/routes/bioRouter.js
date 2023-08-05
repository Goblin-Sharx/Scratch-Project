const express = require("express");
const bioController = require('../controllers/bioController.js'); // for middleware use

const bioRouter = express.Router(); // create router functionality

bioRouter.get("/api", bioController.getBio, (req, res) => {
    console.log('we are in bioController');
    console.log(req.params); // testing check body later
    return res.status(200).json({ characters: res.locals.bio });
});

module.exports = bioRouter;

