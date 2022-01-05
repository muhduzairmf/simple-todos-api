// Simple example of middleware

module.exports = (req, res, next) => {
    const authenticated = req.header("authenticated");
    // get authenticated value from the header

    if (authenticated === "yes") {
        next();
        // if authenticated value is equal to yes
    } else {
        res.status(403).json({ message: "Forbidden" });
        // otherwise, forbidden (not authorize) status will be responded
    }
};