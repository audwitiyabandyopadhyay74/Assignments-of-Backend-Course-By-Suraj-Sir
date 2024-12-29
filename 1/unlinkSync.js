//"Har Har Mahadev",


// unlinkSync
// "What is unlinkSync?"
/*UnlinkSync is one line command of FileSystem of node js */
// "What unlinkSync Does ?"
/*
It deletes a file of the given directory synchronously.
*/

/*For Example: */

const fs = require("fs");
fs.writeFileSync("text3.txt", "Hi There! I am Audwitiya of Class 7", "utf-8", (error, response) => {
    if (error) {
        console.log(error);

    } else {
        console.log(response);
    }
});

fs.unlinkSync("text3.txt");