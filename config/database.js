const mongoose = require('mongoose');

mongoose.connect(
    //connection string
    'mongodb://localhost/flights',
    //option object
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }
);

const db = mongoose.connection;

db.on('connected', function(){
    console.log(`I love it I'm Connected to MongoDB at ${db.host}:${db.port}`)
});