require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../models/UserModel.js")
const SECRET = process.env.SECRET;
const authMiddleware = require('../middlewares/authMiddleware.js')

const router = express.Router();

//POST Request For SignUp
router.post("/signup", async(req, res) => {
    try{
        const {username, email, password} = req.body
        if(!username || !email || !password)
            return res.status(400).json({ message: "All fields are required."})

        const existingUser = await User.findOne({ email })
        if(existingUser) return res.status(400).json({ message: "Email already registered"})

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({username, email, password: hashedPassword });
        await newUser.save()
        res.status(201).json({ message: "User registered successfully!"})
    } catch(err){
        return res.status(500).json({ message: "Signup Failed. Try Again."})
    }
})

//POST request for Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials.' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials.' });

    const token = jwt.sign({ id: user._id, email: user.email }, SECRET, { expiresIn: '1h' });
res.status(200).json({ message: 'Login successful', token });

  } catch (err) {
    res.status(500).json({ message: 'Login failed. Try again.' });
  }
});


//GET request
router.get('/', authMiddleware, async (req, res) => {
  try {
    const { email } = req.query;
    if (email) {
      const user = await User.findOne({ email });
      if (!user) return res.status(404).json({ message: 'User not found' });
      return res.json(user);
    }
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve users' });
  }
});

//PUT Request
router.put('/:id', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const updates = {};
    if (username) updates.username = username;
    if (email) updates.email = email;
    if (password) updates.password = await bcrypt.hash(password, 10);

    const updatedUser = await User.findByIdAndUpdate(req.params.id, updates, { new: true });
    if (!updatedUser) return res.status(404).json({ message: 'User not found' });

    res.json({ message: 'User updated', updatedUser });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update user' });
  }
});

// DELETE Request
router.delete('/:id', async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ message: 'User not found' });

    res.json({ message: 'User deleted', deletedUser });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete user' });
  }
});

module.exports = router;