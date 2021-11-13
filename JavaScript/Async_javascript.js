////////////////////////async keyword makes the function reurn promises

// hello = async() =>{
//     throw "bullshit"; ///promise rejected
//     return "any-value";  ///promise resolved
// }

// hello().then((data)=>{
//     console.log("promised resolved", data);
//         })
//        .catch((err) =>{
//                  console.log("promise rejected", err);
//        })

//////////////////////

// login  = async  (username,password) => {

//     if(!username || !password){
//         throw "type something";
//     }

//     if(password==="donkey"){
//         return "boss";
//     }

//     else throw "password wrong";
// }

// login(username,password).then(data=>{
//            console.log("welcome" , data);
// })
// .catch(err =>{
//     console.log(err);
// })


