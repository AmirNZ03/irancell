save() {
    const db = getdb();
    db.collection('products').insertOne({ name: 'book', price: 13 })
    .then(result => {
        console.log('Inserted:', result.insertedId);
    })
    .catch(err => {
        console.error(err);
    });
}
