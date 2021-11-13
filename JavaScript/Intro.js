// console.log("i am fucked up")
// console.log(1+9)

// const password = prompt("Enter password")

// if(password.indexOf(' ')==-1){
//     console.log("good")
// }
// else
//  console.log('bad')

//  for (let i=0;i<20;i++){
//     console.log(i);
//     }

////////////////////////////////////////////////////////for of
// let swordsmen = ["atomic","love","water","rock"];
// for(let i=0;i<=swordsmen.length;i++){
//     console.log(i);
//     console.log(i,swordsmen[i]);
// }

// for(let swords of swordsmen){
//     console.log(swords);
// }

////////////////////////////////////////////////////
// str.splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2, itemN)
///////////////////////////////////////////////////////

// let swordsmens = { giyu : "water", drag : "atomic" ,mitsuri :"love"};

// for(let sword in swordsmens){
//     console.log(` ${sword} : ${swordsmens[sword]}`);
// }

// console.log(Object.keys(swordsmens));
// console.log(Object.values(swordsmens));
// console.log(Object.entries(swordsmens));


// let choise = "";
// let works=[]
// while(choise!=="quit"){
//     choise = prompt("Enter your choise");
//     if(choise==="new"){
//         let todo = prompt("Enter your work");
//         works.push(todo);
//     }

//     if(choise==="delete"){
//         let del = prompt("Enter index")
//         works.splice(del,1);
//     }

//     if(choise==="print"){
//      for(let work of works){

//         console.log(`${works.indexOf(work)} : ${work}`)
//      }

//     }
//     console.log("quiting ...");
// }

//function can be defined by other following ways

//const add = function (x,y){
//       return x + y
// }

// add(1,3)


////////////////////////////////////////////////////passing function
// function callTwice(x){
//     x();
//     x();
// }

// function rollDie(){
//     const roll = Math.floor(Math.random()*6)+1
//     console.log(roll)
// }

// callTwice(rollDie)


////////////////////////////////////////////////////////// returning function
// function makebetween(max,min){
//     return function(num){
//         return num>=min && num<=max
//     }
// }
// const testrange = function(num){
//      return num>=100 && num<=200
// }

// to call
// const isAdult = makebetween(18,50);
// console.log(isAdult(19))
//output false



//////////////////////////////////////////////////////////////methods in javascript
// const myMath = {

//     square : function(num){
//         return num*num;
//     },

//     cube : function(num){
//             return num**3;
//     }
// }
//call method
// myMath.squre(5)

//////////////////////////////////////////////////////////////////////try and catch

// try{
//       console.log(drag.toUpperCase())  if it runs error it will excute catch
// }

// catch{
//     console.log("Error")
// }



