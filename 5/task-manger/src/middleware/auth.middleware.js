export const authMiddleware = (req, res, next) => {
    if (req.session.user) {
        next();
    }
    res.status(401).json({ message: "Invalid" })
}