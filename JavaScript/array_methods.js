//////////////////////////////////////////////////////////////////Foreach method

// x = [2,49,56,89,45]
// x.forEach(function (ele){
//     console.log(ele)
// })

// demonslayer = [
//     {
//         title:"giyu",
//         sword:"water"
//     },
//     {
//         title:"drag",
//         sword:"atomic"
//     }
// ]

// demonslayer.forEach(function (cont){
//     console.log(`${cont.title} uses ${cont.sword} power`)
// })

////////////////////////////////////////////////////////////////////map method

// const numbers = [1,2,31,65,3,5]
// dub_numbers = numbers.map(function (num){
//     return num*2
// })
// console.log(dub_numbers)

/////////////////////////////////////////////////////////////////// => arrow function

// const add = (x=9,y=1) => {
//     return x+y
// }

// const rolldie = () => {                 
//     return  Math.floor(Math.random()*6)+1

// }

// const add2 = (x=9,y=1) => (      //() used when return key word not used but returns
//      x+y
// )

////////////////////////////////////////////Set time out,Interval ,clearinterval

// setTimeout(() => {console.log("don")},3000)
// const id = setInterval(() =>{console.log("donkey")},2000)

///////////////////////////////////////////////filter method

// const num = [1,2,3,4,5,6,7,8]
// new_num = num.filter((item)=>{return item%2===0})
// console.log(new_num) 


// userNames = ["donkeymania","drag","gypsum","fuckingbullshit"]
// validUserNames = userNames.filter(n => ( n.length<10))
// console.log(validUserNames)

/////////////////////////////////////////////every and sum method 

// const score = [1,2,3,4,5,6,7,8,5,4,3,8,9]
// score.every(x =>x>8)  //false
// score.some(x => x>8)  //true

/////////////////////////////////////////////reduce

// x = [12, 9, 2, 3, 4, 5, 2, 3, 5]
// const total = x.reduce((total1,x_next) => total1 + x_next)
// console.log(total)

////////////////////////////////////////////reduce find

// const minimum = x.reduce((min, next_val) => {

//     if (min > next_val) {
//         return next_val
//     }
//     return min
// })
// console.log(minimum)


//////////////////////////////////////////////this keyword

// const person = {
//     first : "drag",
//     last : "47",
//     full: ()=>{
//         return `${this.first} ${this.last}`
//     }
// }
// /////////////////////////////////////////spread ...

// x = [1,2,3,4] , y=[5,6,7,8]
// // Math.max(x)  ///not a number
// // Math.max(...x) ///spread the iterator
// // console.log(x)  //[1,2,3,4]
// // console.log(...x)//1 2 3 4

// const all = [...x,...y]  //concat two iterables
// console.log(all)

///////////////////////////////////////////////rest ...

// function sum(n1,...x){

//     console.log(`${n1} ${x}`)
// }

// sum(2,3,4,5,6)

///////////////////////////////////////////////destructure

// x = [1,2,3,4,5,7]

// const [y,z,...everyelse] = x;



// const demon = {

//     rui: "spider",
//     akaza : "punch",
//     kokshibu: "sword"
// }

// const {rui, akaza, kokshibu, doma = "fan"}  = demon;

//////////////////////////////////////////////destructure parameters

// function demons({rui,akaza}){
//     return `${rui} ${akaza}`
// }

