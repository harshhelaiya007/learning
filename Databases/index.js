const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const jwtPassword = "jwtPassword";

const app = express();

app.use(express.json());



const newUser = mongoose.model('Users',
    {
        name: String,
        email: String,
        password: String
    });

app.post("/signup", function (req, res) {
    const name = req.body.name;
    const userName = req.body.username;
    const password = req.body.password;
    console.log(name, userName, password);

    var token = jwt.sign({ userName: userName }, jwtPassword);

    const user = new newUser(
        {
            name: name,
            email: userName,
            password: password,
            token: token
        }
    );

    user.save().then(function() {
        res.status(200).json(
            {
                "jwtToken": token
            }
        )
    })
})

app.listen(3000,function() {
    console.log('Port');
})

function dataTypes(data) {

    // Identify the primitive

    console.log(data);
} 

dataTypes("Harsh");

