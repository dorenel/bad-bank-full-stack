import mongodb from 'mongodb';

const MongoClient = mongodb.MongoClient;
const ObjectId = mongodb.ObjectId;

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url, {useUnifiedTopology: true});

let dbCollection;

client.connect((err, db) => {
    const dbConnection = db.db('myproject');
    dbCollection = dbConnection.collection('users');

    console.log("Connected to DB!");
});

const create = (name, email, password) => {
    return new Promise((resolve, reject) => {
        
        const doc = {name: name, email: email, password: password, balance: 0};

        dbCollection
            .insertOne(doc, (err, result) => {
                err ? reject(err) : resolve(result);
            });
    });
};

const login = (email, password) => {
    const query = {email: email, password: password};

    return new Promise((resolve, reject) => {
        dbCollection
            .find(query)
            .toArray((err, result) => {
                if (err || result.length == 0) 
                    reject("Login failed.");
                else
                    resolve(result);
            });
    });
};

const deposit = (userId, amount) => {
    const amountInt = parseInt(amount);
    const query = {_id: ObjectId(userId)};
    const value = {$inc: {balance: amountInt}};

    return new Promise((resolve, reject) => {
        dbCollection
            .findOneAndUpdate(query, value, (err, result) => {
                err ? reject(err) :  resolve(result);
            });
    });
};

const withdraw = (userId, amount) => {
    const amountInt = parseInt(amount) * -1;
    const query = {_id: ObjectId(userId)};
    const value = {$inc: {balance: amountInt}};

    return new Promise((resolve, reject) => {
        dbCollection
            .findOneAndUpdate(query, value, (err, result) => {
                err ? reject(err) : resolve(result);
            });
    });
};

const balance = (userId) => {
    const query = {_id: ObjectId(userId)};
    const projection = {balance: 1};

    return new Promise ((resolve, reject) => {
        dbCollection
            .find(query, projection)
            .toArray((err, result) => {
                err ? reject(err) : resolve(result);
            });
    });
};

const all = () => {
    return new Promise((resolve, reject) => {
        dbCollection
            .find()
            .toArray((err, result) => {
                err ? reject(err) : resolve(result);
            });
    });
};

export default {create, login, deposit, withdraw, balance, all};