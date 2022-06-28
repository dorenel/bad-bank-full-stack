import mongodb from 'mongodb';

const MongoClient = mongodb.MongoClient;

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url, {useUnifiedTopology: true});

let dbConnection;

client.connect((err, db) => {
    dbConnection = db.db('myproject');
    console.log("Connected to DB!");
});

const create = (name, email, password) => {
    return new Promise((resolve, reject) => {
        
        const doc = {name: name, email: email, password: password, balance: 0};

        dbConnection
            .collection('users')
            .insertOne(doc, (err, result) => {
                err ? reject(err) : resolve(result);
            });
    });
};

const all = () => {
    return new Promise((resolve, reject) => {
        dbConnection
            .collection('users')
            .find()
            .toArray((err, result) => {
                err ? reject(err) : resolve(result);
            });
    });
};

export default {create, all};