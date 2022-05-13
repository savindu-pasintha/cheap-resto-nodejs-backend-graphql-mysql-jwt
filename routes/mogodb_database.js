const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/databaseName');
const Cat = mongoose.model('Cat', { name: String }).then(()=>{
    console.log("MongoDb Connected .");
}).catch((err)=>{
    console.log("MongoDb Connection Error : ", err.message);
});


const userSchema = new mongoose.Schema({
    email:{type:String,required:true,lowercase:true,unique:true},
    password:{type:String,required:true}});
const User = mongoose.model('user',userSchema);
module.exports =  User ;