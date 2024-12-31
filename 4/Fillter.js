//"Har Har Mahadev"



//filter
//"What is Filter and What Dose it Does?"
/*
Filter is a method of an array in javascript that helps to filter data
using the given Parsed Data.
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

import express from "express";

const app = express();

const PORT = 8080

app.get("/", (req, res) => {
    res.send(data)
})

//Filtering Part
app.get("/:id", (req, res) => {
    const { id } = req.params;
    const parsed = parseInt(id)
    const filtterdata = data.filter((item) => item.id === parsed)
    if (!filtterdata) {
        res.status(201).send("No Data Found");
    }
})

app.listen(PORT, (req, res) => {
    console.log(`Server is Running on PORT ${PORT}`);
})