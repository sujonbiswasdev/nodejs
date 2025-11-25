const os = require("os");

console.log("System info \n");
console.log("-".repeat(50));
console.log("Platform Details: ");
console.log("Platform: ", os.platform());
console.log("Architecture: ", os.arch());
console.log("OS type: ", os.type());
console.log("OS Release: ", os.release());
console.log("Hostname: ", os.hostname());

console.log("\nCPU info : ");

const cpus = os.cpus();
console.log(cpus);
console.log("cpu model",cpus[0].model);

console.log("Number of cores : ", cpus.length);
console.log("CPU Speed : ", cpus[0].speed);

console.log("-".repeat(50));

const totalMem = os.totalmem();
const freeMem = os.freemem();

console.log(
  "Total Memory : ",
  (totalMem / 1024 / 1024 / 1024).toFixed(2),
  "GB"
);

console.log("Free Memory : ", (freeMem / 1024 / 1024 / 1024).toFixed(2), "GB");

console.log("-".repeat(50));

const uptime = os.uptime();
console.log(uptime);
const days = Math.floor(uptime / 86400);
console.log(days);
const hours = Math.floor((uptime % 86400) / 3600);
console.log(hours);
const minutes = Math.floor((uptime % 3600) / 60);
console.log(minutes);
console.log(`${days} days ${hours} hours ${minutes} minutes`);



// User information
const userInfo = os.userInfo();
console.log(`Current User: ${userInfo.username}`);
console.log(`Home Directory: ${os.homedir()}`);

console.log(`Kernel Version: ${os.version()}`);
console.log(`Temporary Directory: ${os.tmpdir()}`);

// Get network interfaces information
const networkInterfaces = os.networkInterfaces();
console.log(networkInterfaces);
networkInterfaces.lo.map((item=>console.log(item.address)))