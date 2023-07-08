const express= require('express');
const app=express();
const nodemailer=require('nodemailer');

app.use(express.json());
const PORT=8000;

app.post("/send-email",(req,res)=>{
    const {name,email,message}=req.body;

    const transporter=nodemailer.createTransport({
        host:"smtp.gmail.com",
        port:587,
        secure:false,
        auth:{
            user:'ajaypunyapureddy@gmail.com',
            pass:'hmyy tdpd esdh vebb'
        }
    });
    const mailOptions={
    from: email,
    to:'ajaypunyapureddy@gmail.com',
    subject:"New contact for Submission",
    text:`
    name:${name} 
    email:${email} 
    message:${message}`,
};
transporter.sendMail(mailOptions,(error,info)=>{
    if(error){
        console.log("Berror:-",error);
        res.status(500).json({
            success:false,
            message:"error sending mail!!"
        })
    }
    else{
        console.log("Email sent!!",info.response);
        res.status(200).json({success:true,message:"Email sent successfully!!!"})
    }
}) 
});


app.listen(PORT,()=>{
    console.log(`Server Running at ${PORT}`);
})