//"Har Har Mahadev"




//Find
//What is Find and What it does?
/*Find is a method of array which finds
value in between the array.
*/

//For Example 

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

import express from 'express';

const app = express();
const PORT = 8080;
app.get("/", (req, res) => {
    res.send(data)
})

//Find Method
app.get("/:id", (req, res) => {
    const { id } = req.params;
    const parsed = parseInt(id)
    const finddata = data.find((item) => item.id === parsed.id)
    finddata ? res.status(201).send(finddata) : res.status(404).send({ message: "Data Not Found" })
})


app.listen(PORT, (req, res) => {
    console.log(`Server is running on port ${PORT}`)
})