// Setting the environment variable
process.env.UV_THREADPOOL_SIZE = 64;

// Log the thread pool size to verify
console.log('UV_THREADPOOL_SIZE:', process.env.UV_THREADPOOL_SIZE);

let start = Date.now();
const crypto = require('crypto');

const logTime = (label) => {
    console.log(`${label}:`, Date.now() - start);
};

// Perform multiple pbkdf2 calls
for (let i = 1; i <= 5; i++) {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => logTime(i));
}