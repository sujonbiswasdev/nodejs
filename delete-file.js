const fs = require('fs');
fs.writeFileSync("./output/team.txt","this is a team file");
console.log("Temp file created");

if(fs.existsSync("./output/team.txt")){
    console.log('file exits!!');
    fs.unlinkSync('./output/team.txt');
    console.log("file deleted");
}
try {
    fs.unlinkSync("./output/team.txt")
    console.log("file deleted sucessfull");
} catch (error) {
    console.error("Error : ",error.message);
}

fs.writeFile("./output/team2.txt","Another file team",(err)=>{
    if(err) return console.error(err.message);
    
    console.log("Anoter temp file created");
    fs.unlink("./output/team2.txt",(err)=>{
        if(err){
            console.log("Error : ",err.message);
        }else{
            console.log("Team to deveted");
        }
    })
})
