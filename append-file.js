const fs = require('fs')
// fs.appendFile( path, data[, options], callback )

fs.appendFile('./output/text.txt',"rajon ",(err)=>{
    if(err){
        console.log("error found");
    }
    else{
        console.log("data found");
    }
})

const logEntry = `${new Date().toISOString()} user login sucessfully`
fs.appendFile('./data/entries/entry1.txt',logEntry,(err)=>{
    if(err){
        console.log("error found");
    }
    else{
        console.log('data is added sucessfully');
    }
})

console.log("task complete");
