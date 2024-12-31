//"Har Har Mahadev",




//Middleware
// What are Middlewares?
/*Middlewares are functions that have access to 
our req res and improve the thing/ */

//For Example (Morgan has used for the example) 
import express from "express";
import morgan from "morgan";
const app = express();

const PORT = 3000;

app.use(morgan("dev"));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});