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
            res.send(user);
        });
});

// login
app.get('/account/login/:email/:password', (req, res) => {
    dal.login(req.params.email, req.params.password)
        .then(user => res.send(user))
        .catch(err => console.log(err));
});

// deposit
app.get('/account/deposit/:id/:amount', (req, res) => {
    dal.deposit(req.params.id, req.params.amount)
        .then(data => res.send(data))
        .catch(err => console.log(err));
});

// withdraw
app.get('/account/withdraw/:id/:amount', (req, res) => {
    dal.withdraw(req.params.id, req.params.amount)
        .then(data => res.send(data))
        .catch(err => console.log(err));
});

// balance
app.get('/account/balance/:id', (req, res) => {
    dal.balance(req.params.id)
        .then(data => res.send(data))
        .catch(err => console.log(err));
});

// all data
app.get('/account/data', (req, res) => {
    dal.all()
        .then(data => res.send(data))
        .catch(err => console.log(err));
});

app.listen(port, () => {
    console.log("Listening on port " + port);
});