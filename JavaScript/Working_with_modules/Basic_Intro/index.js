const jokes = require("give-me-a-joke");
const colors = require("colors");
const cowsay = require("cowsay");
jokes.getRandomDadJoke (function(joke){
        console.log(cowsay.say({
            text: joke.rainbow,
            e : "$$",
            T : "U"
        }));
})