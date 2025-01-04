// Importing global modules
import express from 'express';
import session from 'express-session';

// Importing local routes
import authRoute from './routes/auth.routes.js';

const app = express();
const PORT = 8000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to Task Manager API 📖');
});

app.use('/auth', authRoute);

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: false,
        maxAge: 1000 * 60 * 60 * 24 // 1 day
    }
}));

// Starting the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});