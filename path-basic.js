const path = require("path");
console.log(path);
console.log("fileName : ",__filename);
console.log("directory Name : ",__dirname);

console.log("\n"+"-".repeat(50)+"\n");
const filePath = "/shafayat/document/nextLevel.pdf";
console.log("analyzing Path : ", filePath,'\n');
console.log("directory : ",path.dirname(filePath));
console.log("Base Name : ",path.basename(filePath)
);
console.log("file Extension ; ",path.extname(filePath));
console.log("File Name",path.basename(filePath,path.extname(filePath)));
const parsed = path.parse(filePath);
console.log("Pased Path Object : ",parsed);
console.log("formatted Path : ",path.format(parsed));
