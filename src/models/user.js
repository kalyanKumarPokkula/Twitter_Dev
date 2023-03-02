import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    }

},{timestamps : true});

userSchema.pre('save' , function(next){
    let user = this;
    const SALT = bcrypt.genSaltSync(9);
    const encryptedpassword = bcrypt.hashSync(user.password , SALT);
    user.password = encryptedpassword;
    next();
})

const User = mongoose.model('User', userSchema);

export default User;