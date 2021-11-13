// //////////////////////////////////////create your own methiod
// String.prototype.join = function(arg){
//     return `${this}${arg}`;
// }

// console.log("drag".join("enterprises"));

// ///////////////////////////////////////
Array.prototype.pop = function () {
    console.log(this[0]);
    return "you have overrided the original pop method";
}

// console.log([1,2,3].pop);
//////////////////////////////////////////////////////////create an object

// function makeColor(r,g,b){
//     const color = {};
//     color.r = r;
//     color.g = g;
//     color.b = b;

//     color.rgb = function(){
//         const{r,g,b}  = this;
//         return `rgb(${r},${g},${b}`;
//     }
//     color.hex = function(){
//         const{r,g,b}  = this;
//         return '#'+ ((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1);
//     }
//     return color;
// }

// const newcolor = makeColor(123,34,78);
// console.log(newcolor.rgb,newcolor.r)

///////////////////////////////////////////////////////////////using new operator

// function makeColor(r, g, b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;

//     this.rgb = function () {
//         const { r, g, b } = this;
//         return `rgb(${r},${g},${b})`;
//     }
//     this.hex = function(){
//                 const{r,g,b}  = this;
//                 return '#'+ ((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1);
//             }
// }

// const newcolor = new makeColor(123,34,78);
// console.log(newcolor.rgb,newcolor.r);
////////////////////////////////////////////////////////////using class

// class Color {
//     constructor(r, g, b) {
//         this.r = r;
//         this.g = g;
//         this.b = b;
//     }
//     rgbtext(){
//         const { r, g, b } = this;
//         return `${r},${g},${b}`;
//     }
//     rgb() {
//         const { r, g, b } = this;
//         return `rgb(${this.rgbtext()})`;
//     }
//     rgba(a=1.0) {
//         const { r, g, b } = this;
//         return `rgb(${this.rgbtext()},${a})`;
//     }

//     hex() {
//         const { r, g, b } = this;
//         return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//     }
// }

// const c1 = new Color(123, 23, 45);

////////////////////////////////////////////////////inheritance

class Pet{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    eat(food){
        console.log(`${this.name} likes to eat ${food}`);
    }
}

class Dog extends Pet{
    bark(){
        console.log("woof woof");
    }
}

class Cat extends Pet{
    constructor (name,age,lives=9)
      {
          super(name,age);
          this.lives = lives;
      }
    meow(){
        const{name,age,lives} = this
        console.log(`meow meow ${name} is ${age} has ${lives} lives left`);
    }
}

const pet1 = new Dog("ravi",4);
console.log(pet1.eat("meat"));

const pet2 = new Cat("klis",5,10);
console.log(pet2.meow());