// add model here

const bioController = {};

bioController.getBio = async (req, res, next) => {
    // req.boy = { borough: 'Manhattan', neighborhood: 'Chelsea'}
    console.log("getBio controler req.body ->", req.body); // what client is sending
    res.locals.bio = {
        bio: 'Jay-Z is a rapper. Shawn Corey Carter, known professionally as Jay-Z, is an American rapper, record producer, and entrepreneur. Widely regarded as one of the greatest rappers of all time, he has been central to the creative and commercial success of artists including Kanye West, Rihanna, and J. Cole.'
    }
    return next();
}

module.exports = bioController;