const mongoose = require('mongoose');
module.export = () =>{
    try{
        mongoose.connect("mongodb://127.0.0.1:27017/login",{
            useNewUrlparser:true,
            useUnifiedTopology:true

        });
        console.log("DB Connection Successfully!!!");
    }
    catch(error){
        console.log("DB Connection failed!!");
        console.log("DEV DB ERROR:-", error);
}
};