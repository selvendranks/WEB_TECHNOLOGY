// /////////////////////////////////////////////////three types of eventSelector
// let butv2 = document.querySelector('#v2');
// butv2.ondblclick = () =>{
//     console.log("stop clicking me");
//     console.log("2nd time");
// }
// h1 = document.querySelector('h1');
// butv2.onmouseenter =() =>{
//     console.log("it feels good");
// }


// let butv3 = document.querySelector('#v3');
// butv3.addEventListener('click',()=>{console.log("clicked")});
// butv3.addEventListener('onmouseenter',()=>{console.log("clicked2")});

// const bgcolor = document.querySelector('#bg-color');
// bgcolor.addEventListener("click",()=>{
//     const random = () =>(Math.floor(Math.random()*255));
//     const newcolor= `rgb(${random()},${random()},${random()})` ;
//     document.body.style.backgroundColor = newcolor;
//     h1.innerText = newcolor;
// })
// ////////////////////////////////////////////////////"this" keyword can be used in elements  

// const butt = document.querySelectorAll("button");
// for(let but of butt){

//     but.addEventListener('click',colorize);
// }

// function colorize()

//   {    const random = () =>(Math.floor(Math.random()*255));
//       newcolr = `rgb(${random()},${random()},${random()})`
//       this.style.backgroundColor = newcolr
//       this.innerText = newcolr };

// const input = document.querySelector('input');
// input.addEventListener('keydown', (arg) => { 
        

//        console.log(arg.key);
//        console.log(arg.code);
// })

/////////////////////////////////////////////form event

const tweetform = document.querySelector('#tweetpost')
tweetform.addEventListener('submit',function(arg){
    arg.preventDefault();
    const user = document.querySelectorAll('input')[0];
    // console.log(tweetpost.elements.user.value);
     console.log(user.value);
    const twee = document.querySelectorAll('input')[1];
    ///////////////
    const container  = document.querySelector('#newtweets')
    const newtweet = document.createElement('li');
    const name = document.createElement('span');
    const tweet = document.createElement('span');
    name.innerText = user.value;
    tweet.innerText = twee.value;
    container.append(newtweet);
    newtweet.append(`${name.innerText} - ${tweet.innerText}` );
    arg.preventDefault();
})

////////////////////////////// to stop bubbling arg.stopPropagation()

////////////////////////////////Event delegation
////////////////////////////////click ok li to delete
const container  = document.querySelector('#newtweets')
container.addEventListener('click',(arg)=>{
    console.log(arg);
    arg.target.remove();
})



