// fs.writeFile(file, data, options, callback);
const fs = require('fs')
const content1 = "This is a Content \n node is awesome!!"
try {
    fs.writeFileSync('./output/text.txt',content1)
    console.log('file write sync');
} catch (error) {
    console.log(error.message);
}


const content2 = "this is sujon biswas"
fs.writeFile('./output/async-file.txt',content2,(error,data)=>{
    if(error){
        console.log("data not found");
    }else{
        console.log("data added sucessfully");
    }
})


const data = 'Hello, world!';

fs.writeFile('./output/output.txt', data, 'utf8', (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }
  console.log('File written successfully!');
});