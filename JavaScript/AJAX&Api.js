//////////////////////////request using xml

// const req = new XMLHttpRequest();

// req.onload = function(){
//     console.log("All done");
//     const parsed = JSON.parse(this.responseText);
//     console.log(parsed.ticker.price);
// }

// req.onerror = function(){
//     console.log("Error");
// }

// req.open('GET','https://api.cryptonator.com/api/ticker/btc-usd');
// req.send();

///////////////////////////request using fetch

// fetch("https://api.cryptonator.com/api/ticker/btc-usd")
//       .then(data =>{
//           console.log("man i told you i would do it",data);
//           return data.json();
//       })
//       .then(data =>{
//           console.log("data parsed",data);
//           console.log("price  : ",data.ticker.price);
//       })
//       .catch(data =>{
//           console.log("i told yo its not possible");
//       })

/////////////////////////////   using axios library

// axios.get("https://api.cryptonator.com/api/ticker/btc-usd")
//       .then(info =>{
//           console.log(info);
//           console.log("price:",info.data.ticker.price);
//       })
//       .catch(error=>{
//           console.log("failed",error);
//       })

//////////////////////////////////////axios example
const jokeButton = document.querySelector('#joke');
jokeButton.addEventListener("click",(data)=>{
    getDadJoke();
})

const getDadJoke = ()=>{

    const config = {headers:{Accept: 'application/json'}};
    axios.get("https://icanhazdadjoke.com/",config)
          .then(info=>{
                     console.log(info.data.joke);
          })
}

//////////////////////////////////////advaanced api request

const form = document.querySelector("#searchForm");
form.addEventListener('submit', (arg) => {
    arg.preventDefault();
    const searchTerm = form.elements.query.value;
    search(searchTerm);
})

const search = (term) => {

    axios.get(`https://api.tvmaze.com/search/shows?q=${term}`)
        .then(info => {
                clear();
                for(let inf of info.data){
                    imageSrc = inf.show.image.medium;
                    addimage(imageSrc);
                }
        })
}
const clear = () =>{
    document.querySelectorAll('img').forEach(n=>n.remove());
    
    }


const addimage = (imageSrc)=>{
    const container = document.querySelector('#images');
    const images = document.createElement('img');
    images.src = `${imageSrc}`;
    container.append(images);
    
}