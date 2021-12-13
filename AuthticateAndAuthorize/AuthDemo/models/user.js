const mongoose = require('mongoose');
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


const User = mongoose.model('User',userSchema);
module.exports = User;