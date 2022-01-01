const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const {Schema} = mongoose;

const userSchema = new Schema({
       userName : {
           type : String,
           required: [ true,'Username cant be blank']
       },
       password:{
          type: String,
          required :[true, "Password cannot be blank"]
      }
})

userSchema.statics.findAndValidate = async function(username,password){
    const foundUser = await this.findOne({username});
    const isValid = await bcrypt.compare(password, foundUser.password);
    return isValid ? foundUser:false;
}

userSchema.pre('save',async function(next){
    if(!this.isModified('password'))
         next();
    this.password = await bcrypt.hash(this.password,12);
    next();
})

const User = mongoose.model('User',userSchema);
module.exports = User;