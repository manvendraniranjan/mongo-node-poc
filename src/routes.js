const express = require('express');
const User = require('./models/User'); // Import User model

const router = express.Router();


router.get('/hello', (req, res) => {
    res.send('Hello from the Manav');
});

// Register a new user
router.post('/register', async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        const newUser = new User({ email, password });
        const savedUser = await newUser.save();

        res.json({ message: 'User created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

// Login a user
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Implement token generation and authentication logic here (e.g., JWT)
        res.json({ message: 'Login successful' });
    } catch (error) {
        console.error(error);
        res.status(500)
    }
})

module.exports = router;

