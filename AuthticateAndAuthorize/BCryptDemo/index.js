const bcrypt = require('bcrypt');

// const hashPassword = async(plainPassword)=>{
//        const salt = await bcrypt.genSalt(12);
//        const hash = await bcrypt.hash(plainPassword,salt);
//        console.log(salt);
//        console.log(hash);
// }   
    // or

const hashPassword = async(plainPassword)=>{
    const hash = await bcrypt.hash(plainPassword,12);
    console.log(hash);
}

const login = async(plainPassword,hash)=>{
    const result = await bcrypt.compare(plainPassword,hash);
    if(result){
        console.log("you are logged in");
    }
    else{
        console.log("tryagain");
    }
}
hashPassword('monkey');
// login('monkey','$2b$04$VQkf06QTr69cokugse18oO81T8LmWKUG3xDXOrKvq4FC/mXTaoLuu');