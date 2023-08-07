const express = require("express");
const bioController = require('../controllers/bioController.js'); // for middleware use

const bioRouter = express.Router(); // create router functionality

bioRouter.post("/api/bio", bioController.getBio, (req, res) => {
    console.log('bioRouter Sending to Client -->', res.locals.bio); 
    return res.status(200).json(res.locals.bio);
});

module.exports = bioRouter;

