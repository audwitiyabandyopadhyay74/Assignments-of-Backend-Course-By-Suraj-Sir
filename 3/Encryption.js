//"Har Har Mahadev"


//Encryption
//What is Encryption ?
//Encryption is method of crypto which helps to store data in encrypted form nad makes it secure.

//For Example

const crypto = require("crypto");

function encrypt(text, secretKey) {
    const algorithm = "aes-256-cbc";
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(algorithm, Buffer.from(secretKey, 'hex'), iv);
    let encrypted = cipher.update(text, "utf8", 'hex');
    encrypted += cipher.final('hex');
    return iv.toString("hex") + ':' + encrypted;
}

const secretKey = crypto.randomBytes(32).toString("hex");
const data = JSON.stringify({
    Name: "Name",
    Age: 20,
    Password: "123456!#@#!"
});

const encrypted = encrypt(data, secretKey);

console.log("Data: " + encrypted);
console.log("SecretKey: " + secretKey);