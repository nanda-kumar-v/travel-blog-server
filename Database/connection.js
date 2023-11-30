const mongoose = require('mongoose')
const connectionString = process.env.DATABASE

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDb Connected Successfully");
}).catch((err) => {
    console.log("MongoBd Connection Failed", err);
})