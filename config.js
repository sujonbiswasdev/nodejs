require("dotenv").config();
const config ={
    app:{
        name:process.env.APP_NAME || "DefaultName",
        version:process.env.APP_VERSION || '1.0.0',
        port:process.env.PORT || 8080,
        node:process.env.NODE_DEV || "programmer"
    }
}
console.log(config);

module.exports = config