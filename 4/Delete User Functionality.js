import express from 'express';
import { data } from "./Data/data"
import * as res from 'express/lib/response';

const app = express();
app.use(express.json());
const PORT = 8510;



// *1. GET Request (it is fetching data from server)
app.get('/', (req, res) => {
        res.status(200).send("Hello World")
    })
    // Industry Standars
app.get("/api/v1/users", (req, res) => {
    res.status(200).send(data)
    console.log(data)
    console.log(req.query)
    if (name) {
        const newdata = data.filter((user) => {
                return user.name === name
            })
            // Query Prams

        return res.status(200).send(newdata)
    }
})



// router params
app.get("/api/v1/users/:id", (req, res) => {
        const { id } = req.params;
        const parsedID = parseInt(id);
        const user = userData.find((user) => user.id === parsedID);
        if (!user) {
            return res.status(404).send("User not found");
        }
    })
    // *2 POST request(it is item)
app.post("/api/v1/users", (req, res) => {
    const { name, displayname } = req.body;


    const newUser = {
        id: userData.length + 1,
        name,
        displayname
    }

    userData.push(newUser)

    res.status(201).send({
        message: "User Created",
        data: newUser
    })
})

app.put("/api/v2/users/:id", () => {

    console.log("Hello World")
    const {
        body,
        params: { id }
    } = req;
    const parsedID = parseInt(id);
    const userIndex = userData.findIndex((user) => user.id === parsedID);
    if (userIndex === -1) {
        return res.status(404).send("User not found");
    }
    userData[userIndex] = {
        id: parsedID,
        body
    }
})


app.delete("/delete/user/:id", () => {
    const { id } = request.params;
    const parsed = parseInt(id)
    const userindex = data.findIndex((user) => user.id === parsed)
    if (userindex === -1) {
        return response.status(404).send({ message: "User not found" })
    }
    data.slice(userindex, 1)
})


// app.listen(PORT, (req, res) => { //+
// }) //+
// console.log("Server is running on port 8000") //+
app.listen(PORT, (req, res) => {
    console.log("Server is running on port 8000")
})