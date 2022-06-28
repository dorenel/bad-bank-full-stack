import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import dal from './dal.js';

const app = express();

const port = 3000;

app.use(express.static('public'));
app.use(cors());
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: true}));

// create account
app.get('/account/create/:name/:email/:password', (req, res) => {
    dal.create(req.params.name, req.params.email, req.params.password)
        .then((user) => {
            console.log('user: ' + user);
            res.send(user);
        });
});

// login
app.get('/account/login', (req, res) => {
    res.send("hello");
});

// deposit
app.get('/account/deposit', (req, res) => {
    res.send("hello");
});

// withdraw
app.get('/account/withdraw', (req, res) => {
    res.send("hello");
});

// all data
app.get('/account/data', (req, res) => {
    dal.all()
        .then((users) => {
            console.log(users);
            res.send(users);
        });
});

app.listen(port, () => {
    console.log("Listening on port " + port);
});