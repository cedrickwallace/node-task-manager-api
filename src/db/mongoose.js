const mongoose = require('mongoose')


mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})

//Command for starting mongo dev db
///Users/ryn/mongodb/bin/mongod --dbpath=/Users/ryn/mongodb-data