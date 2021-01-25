const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/user')
const bcrypt = require("bcryptjs");

const router = express.Router();


router.post('/signup', async (req,res) => {
    try {
        
        const {email, password } = req.body;
        let hashedPwd = bcrypt.hashSync(password, 10);
        const user =  User({email : email, password: hashedPwd});
        await user.save();
    } catch (error) {
        console.log(error)
    }



    res.send(' You made it')
})

module.exports = router
