const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/relation')
.then(()=>{
    console.log("connected")
})
.catch((err)=>{
    console.log(err);
});

const userSchema = new mongoose.Schema({
    first:{
        type : String
    },
    last:{
        type : String
    },
    address:[
        {   
            street:{
                type:String
            },
            city:{
                type : String
            },
            state:{
                type: String
            },
            country:{
                type: String,
            }

        }
    ]
})
const User = mongoose.model("User",userSchema)

const makeuser = async() =>{
    const u = new User({
        first : 'drag',
        last: '47',
    })
    u.address.push({
        street :'dubai sandhu',
        city: 'dubai nagar',
        state :'dubai state',
        state:'dubai'
    })
    const res = await u.save();
}

makeuser();
