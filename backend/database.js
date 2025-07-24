const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
let _db;
const mongoConnect=callback=>{MongoClient.connect('mongodb+srv://amir:amir1382@cluster0.nhg3ytf.mongodb.net/test?tls=true', { useUnifiedTopology: true })
.then(client => {
    console.log('Connected');
   _db=client.db()
    callback()
})
.catch(err => {
    console.error(err);
});
}
const getdb=()=>{
    if(_db){
        return _db
    }
    throw 'no database'
}
exports.mongoConnect=mongoConnect
exports.getdb=getdb