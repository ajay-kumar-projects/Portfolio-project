const mongoose = require('mongoose');
const Joi = require('joi');
const passwordComplexity = require('joi-passwordComplexity');
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
    firstName:{type:String, require:true},
    lastName:{type:String, require:true},
    email:{type:String, require:true},
    password:{type:String, require:true},

});
userSchema.methods.generateAuthToken= function(){
    const token = jwt.sign({_id:this._id}, "secret123", {expiresIn:"7d"});
    return token;
}
const User = mongoose.model("user", userSchema);
const Validate = (data) =>{
    const schema = Joi.object({
        firstName:Joi.string().required().label("FirstName"),
        lastName:Joi.string().required().label("LastName"),
        email:Joi.string().email().required().label("Email"),
        password:passwordComplexity().required().label("password"),
    });
    return schema.validate(data);
}
module.exports = {User, Validate}