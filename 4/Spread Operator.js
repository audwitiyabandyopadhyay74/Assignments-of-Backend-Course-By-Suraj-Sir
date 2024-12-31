//"Har Har Mahadev",




//Spread Operator
//What is Spread Operator?
/*
Spread Operator allows literal t o expand where 0+ expected.
*/

// For Example

const data = [{
        id: 1,
        name: "Computer",
        price: 100000
    },
    {
        id: 2,
        name: "TV",
        price: 30000
    },
    {
        id: 3,
        name: "Mobile",
        price: 27999
    },
    {
        id: 4,
        name: "Laptop",
        price: 45000
    }

]
const express = require('express');
const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
    res.send(...data)
})

app.listen(PORT, () => {
    console.log(`Server is running at: ${PORT}`)
})