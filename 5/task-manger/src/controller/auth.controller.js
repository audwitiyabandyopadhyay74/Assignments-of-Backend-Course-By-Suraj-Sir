export const login = (req, res) => {
    const { username } = req.body;

    if (!username) {
        return res.status(400).json({ error: "Username is required" });
    }

    // Store user data in session
    req.session.user = { username };

    // Set a cookie
    res.cookie("username", username, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 });

    res.json({ message: "Login Successful", username });
};
export const Logout = (req, res) => {
    res.send("logout route");
    res.clearCookie("username");
    res.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ message: "Error Logging Out" });
        }
        return res.json({ message: "User logged out successfully" });
    });
}