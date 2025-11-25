const fs = require('fs')
console.log('start reading');

fs.readFile('./data/dairy.txt','utf-8',(error,data)=>{
    if(error){
        console.log("error found");
    }
    console.log(data);
})

console.log('finised');