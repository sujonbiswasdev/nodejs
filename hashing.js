// password123;
//  jfjfkffkjff1564fdfh89ysfD#jaj

const crypto = require("crypto");


console.log("\n MD5 Hash: ");

const md5Hash = crypto.createHash("md5").update("password123").digest("hex"); //not recommended

console.log("input: password123");
console.log("MD5 HashedPassword: ", md5Hash);

const sha1 = crypto.createHash("sha1").update("password123").digest('hex')
console.log('input : password123');
console.log("sha1",sha1);

const sha256Hash = crypto
  .createHash("sha256")
  .update("password123")
  .digest("hex");
console.log("input: password123");
console.log("SHA256 HashedPassword: ", sha256Hash);


const sha3512 = crypto.createHash("sha3-512").update("password123").digest('hex')
console.log("input: password123");
console.log("sha3512 HashedPassword: ", sha3512);