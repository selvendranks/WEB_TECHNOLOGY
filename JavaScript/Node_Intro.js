/////////////////////////////// command line argument

// const args = process.argv.slice(2);
// for(let arg of args){
//     console.log(arg);
// }

///////////////////////////////  creating director uing node (syncronised version)

try{
const fs = require('fs');
const folderName = process.argv[2] || 'Untitled';
fs.mkdirSync(folderName);
fs.writeFileSync(`${folderName}.html`);
}
catch(e){
    console.log("sorry error",e);
}