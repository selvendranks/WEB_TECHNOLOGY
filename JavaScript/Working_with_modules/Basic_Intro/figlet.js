const figlet = require("figlet");
const colors = require("colors");
const argu = process.argv[2];
figlet(argu, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data.rainbow);
});