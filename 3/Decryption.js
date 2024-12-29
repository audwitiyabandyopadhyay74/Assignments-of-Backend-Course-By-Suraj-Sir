//"Har Har Mahadev"


//Decryption
//What is Decryption ?
//Description is a a method of crypto module which helps to take back encryption data to its originaL form.


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

function decrypt(text, secretKey) {
    const algorithm = "aes-256-cbc";
    const textParts = text.split(':');
    const iv = Buffer.from(textParts.shift(), 'hex');
    const encryptedText = Buffer.from(textParts.join(':'), 'hex');
    const decipher = crypto.createDecipheriv(algorithm, Buffer.from(secretKey, 'hex'), iv);
    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

const secretKey = crypto.randomBytes(32).toString("hex");
const data = JSON.stringify({
    Name: "Name",
    Age: 20,
    Password: "123456!#@#!"
});

const encrypted = encrypt(data, secretKey);
console.log("Encrypted Data: " + encrypted);

const decrypted = decrypt(encrypted, secretKey);
console.log("Decrypted Data: " + decrypted);