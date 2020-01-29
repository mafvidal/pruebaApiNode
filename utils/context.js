module.exports = () => {
    return (req, res, next) => {
        req.context = req.context ? req.context : {};
        return next();
    }
};
