const router=require("express").Router();
const bcrypt=require("bcrypt");
const {User}=require("../models/user.js");
const Joi=require("joi");
router.post("/",async(req,res)=>{
    try{
        const validate=(data)=>{
            const schema=Joi.object({
                email:Joi.string().email().required().label("Email"),
                password:Joi.string().required().label("password"),
            })
            return schema.validate(data);
        }
        const{error}=validate(req.body);
        if(error) return res.status(400).send({message:"Validation Error!!"});
        const user=await User.findOne({email:req.body.email});
        if(!user)
        return res.status(410).send({message:"Invalid Email or password"})
        const valid=await bcrypt.compare(req.body.password,user.password);
        if(!valid)
        return res.status(410).send({message:"Wrong Email or password"})
        const token=user.generateAuthToken();
        res.status(200).send({message:"Login Successful"})

    }catch(error){
        console.log("AJ Login Error:",error);
        res.status(500).send({message:"Login Server Error"});
    }
});