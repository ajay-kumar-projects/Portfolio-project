const router = require('express').Router();
const bcryprt = require('bcrypt');

const{User, Validate} = require('../models/user.js')
router.post('/', async(req,res) =>{
    try{
        const {error}= validate(req.body);
        if(error) return res.status(400).send({
            message:"Validation Error!!"
        });
        const user = await User.findOne({email:req.body.email});

        if(user) return res.status(401).send({message:"User Already Exist!!"});

        const salt = await bcryprt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password,salt);
        await newUser({...req.body, password:hashedPassword}).save();
        res.status(200).send ({message:"SignUp Successfully!!!"});
    }
    catch(error){
        console.log("DEV SIGNUP ERROR:-", error);
        res.status(500).send({message:"Signup Server Found!!"})
}
});